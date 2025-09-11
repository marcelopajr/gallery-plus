import { useForm } from 'react-hook-form';
import Alert from '../../../components/alert';
import Button from '../../../components/button';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '../../../components/dialog';
import ImagePreview from '../../../components/image-preview';
import InputSingleFile from '../../../components/input-single-file';
import InputText from '../../../components/input-text';
import Skeleton from '../../../components/skeleton';
import Text from '../../../components/text';

interface PhotoNewDialogProps {
  trigger: React.ReactNode;
}

export default function PhotoNewDialog({ trigger }: PhotoNewDialogProps) {
  const form = useForm();
  const isLoadingAlbum = false;
  const albums = [
    { id: '1', title: 'Sample Album 1' },
    { id: '2', title: 'Sample Album 2' },
    { id: '3', title: 'Sample Album 3' },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent>
        <DialogHeader>Add new photo</DialogHeader>

        <DialogBody className="flex flex-col gap-5">
          <InputText placeholder="Add a title" maxLength={255} />

          <Alert>
            Max size: 50MB
            <br />
            Allowed types: PNG, JPG, JPEG
          </Alert>

          <InputSingleFile
            form={form}
            allowedExtensions={['.jpg', '.jpeg', '.png']}
            maxFileSizeInMB={50}
            replaceBy={<ImagePreview className="w-full h-56" />}
          />

          <div className="space-y-3">
            <Text variant="label-small">Select albums</Text>

            <div className="flex flex-wrap gap-3">
              {!isLoadingAlbum &&
                albums.length > 0 &&
                albums.map((album) => (
                  <Button
                    key={album.id}
                    variant="ghost"
                    size="sm"
                    className="truncate"
                  >
                    {album.title}
                  </Button>
                ))}
              {isLoadingAlbum &&
                Array.from({ length: 5 }).map((_, index) => () => (
                  <Skeleton
                    key={`album-loading-${index}`}
                    className="w-20 h-7"
                  />
                ))}
            </div>
          </div>
        </DialogBody>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>

          <Button>Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
