import { useState } from 'react';
import { Modal, Fade, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { useAlbumContext } from '../../../contexts/AlbumContext';
import { ImageType, RenditionKey, Mp4Rendition, Rendition, WebpRendition } from '../../../interfaces/Gif';
import { RENDITION_NAMES, MP4_ONLY_IMAGE_TYPE_SET } from '../../../staticData/gif';
import { GifPlayer } from './GifPlayer';
import { useStyles } from './useStyles';
import { RenditionSelectBoxes } from './RenditionSelectBoxes';

export function GifModal() {
  const classes = useStyles();
  const DEFAULT_IMAGE_TYPE_NAME = 'original';
  const DEFAULT_RENDITION_NAME = 'gif';
  const { gif, setGif } = useAlbumContext();
  const [imageType, setImageType] = useState<ImageType>(DEFAULT_IMAGE_TYPE_NAME);
  const [renditionName, setRenditionName] = useState<RenditionKey>(DEFAULT_RENDITION_NAME);

  function handleChangeImageType(event: React.ChangeEvent<{ value: unknown }>) {
    const newImageType = event.target.value as ImageType;
    if (MP4_ONLY_IMAGE_TYPE_SET.has(newImageType)) {
      setRenditionName('mp4');
    } else {
      setRenditionName(DEFAULT_RENDITION_NAME);
    }
    setImageType(newImageType);
  }

  function handleChangeRenditionName(event: React.ChangeEvent<{ value: unknown }>) {
    setRenditionName(event.target.value as RenditionKey);
  }

  function getUrl() {
    const image = gif?.images[imageType];

    if (renditionName === 'mp4') {
      return (image as Mp4Rendition).mp4;
    } else if (renditionName === 'webp') {
      return (image as WebpRendition).webp;
    }
    return (image as Rendition).url;
  }

  function getRenditionNames() {
    const image = gif?.images[imageType];

    return RENDITION_NAMES.filter((renditionName) => {
      if (renditionName === 'mp4') {
        return image?.hasOwnProperty('mp4');
      } else if (renditionName === 'webp') {
        return image?.hasOwnProperty('webp');
      } else if (renditionName === 'gif') {
        return image?.hasOwnProperty('url');
      }
      return true;
    });
  }

  if (!gif) {
    return null;
  }

  return (
    <Modal className={classes.root} open={!!gif} onClose={() => setGif(null)} closeAfterTransition>
      <Fade in={!!gif}>
        <Grid container direction="column" className={classes.contentWrapper}>
          <Grid container item justifyContent="space-between" className={classes.closeIconWrapper}>
            <RenditionSelectBoxes
              imageType={imageType}
              renditionName={renditionName}
              renditionNames={getRenditionNames()}
              handleChangeImageType={handleChangeImageType}
              handleChangeRenditionName={handleChangeRenditionName}
            />
            <CloseIcon className={classes.closeIcon} onClick={() => setGif(null)} />
          </Grid>
          <GifPlayer
            renditionName={renditionName}
            src={getUrl()}
            title={gif.title}
            height={gif.images[imageType]?.height || ''}
            width={gif.images[imageType]?.width || ''}
          />
        </Grid>
      </Fade>
    </Modal>
  );
}
