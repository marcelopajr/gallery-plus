import React from 'react';
import { type VariantProps, tv } from 'tailwind-variants';
import Icon from './icon';
import Text, { textVariants } from './text';
import UploadFileIcon from '../assets/icons/upload-file.svg?react';
import FileImageIcon from '../assets/icons/image.svg?react';
import { useWatch } from 'react-hook-form';

export const inputSingleFileVariants = tv({
  base: `flex flex-col items-center justify-center w-full
  border border-solid border-border-primary
  group-hover:border-border-active rounded-lg gap-1
  transition`,
  variants: {
    size: {
      md: `px-5 py-6`,
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const inputSingleFileIconVariants = tv({
  base: `fill-placeholder`,
  variants: {
    size: {
      md: `w-8 h-8`,
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

interface InputSingleFileProps
  extends VariantProps<typeof inputSingleFileVariants>,
    Omit<React.ComponentProps<'input'>, 'size'> {
  form: any;
  allowedExtensions: string[];
  maxFileSizeInMB: number;
  error?: React.ReactNode;
}

export default function InputSingleFile({
  form,
  allowedExtensions,
  maxFileSizeInMB,
  size,
  error,
  ...props
}: InputSingleFileProps) {
  const formValues = useWatch({ control: form.control });
  const name = props.name || '';
  const formFile: File = React.useMemo(() => {
    return formValues[name]?.[0];
  }, [formValues, name]);
  const { fileExtension, fileSize } = React.useMemo(
    () => ({
      fileExtension: formFile?.name?.split('.')?.pop()?.toLowerCase() || '',
      fileSize: formFile?.size || 0,
    }),
    [formFile]
  );

  function isValidExtension() {
    return allowedExtensions.includes(fileExtension);
  }

  function isValidSize() {
    return fileSize <= maxFileSizeInMB * 1024 * 1024;
  }

  function isValidFile() {
    return isValidExtension() && isValidSize();
  }

  return (
    <div className="w-full relative group cursor-pointer">
      {!formFile || !isValidFile() ? (
        <>
          <div>
            <input
              type="file"
              className={`absolute top-0 right-0 w-full h-full opacity-0 cursor-pointer`}
              {...props}
            />
            <div className={inputSingleFileVariants({ size })}>
              <Icon
                svg={UploadFileIcon}
                className={inputSingleFileIconVariants({ size })}
              />
              <Text
                variant="label-medium"
                className="text-placeholder text-center"
              >
                Put the file here <br /> (or click to upload)
              </Text>
            </div>
          </div>

          <div className="flex flex-col gap-1 mt-1">
            {formFile && !isValidExtension() && (
              <Text variant="label-small" className="text-accent-red">
                File extension is not allowed
              </Text>
            )}
            {formFile && !isValidSize() && (
              <Text variant="label-small" className="text-accent-red">
                Size of the file is too large
              </Text>
            )}
            {error && (
              <Text variant="label-small" className="text-accent-red">
                {error}
              </Text>
            )}
          </div>
        </>
      ) : (
        <div className="flex gap-3 items-center border border-solid border-border-primary mt-5 p-3 rounded">
          <Icon svg={FileImageIcon} className="fill-white w-6 h-6" />
          <div className="flex flex-col">
            <div className="truncate max-w-80">
              <Text variant="label-medium" className="text-placeholder">
                {formFile.name}
              </Text>
            </div>
            <div className="flex">
              <button
                type="button"
                className={textVariants({
                  variant: 'label-small',
                  className: 'text-accent-red cursor-pointer hover:underline',
                })}
                onClick={() => {
                  form.setValue(name, undefined);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
