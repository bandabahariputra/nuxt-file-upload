import type { ClientUploadedFileData } from 'uploadthing/types';

import type { UploadRouter } from '../server/lib/uploadthing';

export const useUploadFile = (endpoint: keyof UploadRouter) => {
  const uploadFiles = ref<File[]>();
  const uploadedFiles = ref<ClientUploadedFileData<null>[]>([]);
  const isUploading = ref(false);
  const progresses = ref<Record<string, number>>();

  const { startUpload } = useUploadThing(endpoint, {
    onUploadProgress: (p: number) => {
      progresses.value = {
        progress: p,
      };
    },
    onClientUploadComplete(res) {
      uploadedFiles.value = [...res, ...uploadedFiles.value];
    },
  });

  const onUpload = async (files: File[]) => {
    uploadFiles.value = files;
    isUploading.value = true;

    try {
      await startUpload(files);
    } catch (error) {
      console.log(error);
    } finally {
      isUploading.value = false;
      uploadFiles.value = undefined;
      progresses.value = undefined;
    }
  };

  return { onUpload, uploadFiles, uploadedFiles, isUploading, progresses };
};
