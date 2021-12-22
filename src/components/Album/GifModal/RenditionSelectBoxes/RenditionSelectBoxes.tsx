import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import { ImageType, RenditionKey } from '../../../../interfaces/Gif';
import { IMAGE_TYPES } from '../../../../staticData/gif';
import { useStyles } from './useStyles';

export interface Props {
  imageType: ImageType;
  renditionName: RenditionKey;
  renditionNames: RenditionKey[];
  handleChangeImageType: (event: React.ChangeEvent<{ value: unknown }>) => void;
  handleChangeRenditionName: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

export function RenditionSelectBoxes({
  imageType,
  renditionName,
  renditionNames,
  handleChangeImageType,
  handleChangeRenditionName,
}: Props) {
  const classes = useStyles();

  function formatImageTypeName(imageType: ImageType) {
    const ImageTypeWithouUnderscores = imageType.replaceAll('_', ' ');
    return ImageTypeWithouUnderscores.charAt(0).toUpperCase() + ImageTypeWithouUnderscores.slice(1);
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>Image type</InputLabel>
        <Select value={imageType} onChange={handleChangeImageType}>
          {IMAGE_TYPES.map((imageType) => (
            <MenuItem key={imageType} value={imageType}>
              {formatImageTypeName(imageType)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rendition</InputLabel>
        <Select data-testid="rendition-box" value={renditionName} onChange={handleChangeRenditionName}>
          {renditionNames.map((renditionName) => (
            <MenuItem key={renditionName} value={renditionName}>
              {renditionName.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
