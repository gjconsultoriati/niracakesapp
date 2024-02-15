import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

import { useState } from 'react';

type ImagePropsDTO = {
  creationTime: number;
    duration: number;
    filename: string;
    height: number;
    id: string;
    mediaSubtypes: string[];
    mediaType: any // Adaptado para aceitar somente 'photo' ou 'video'
    modificationTime: number;
    uri: string;
    width: number;

}
export function useHome() {
  const [images, setImages] = useState<ImagePropsDTO[]>([]);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  console.log(images)
  async function handleCamera() {
    if (!permissionResponse?.granted) {
      requestPermission();  
    } else {
      try {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status === 'granted') {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
          });

          if (!result.canceled) {
            const asset = await MediaLibrary.createAssetAsync(result.assets[0].uri);
            const newImage: ImagePropsDTO = {
              creationTime: asset.creationTime,
              duration: asset.duration ?? 0,
              filename: asset.filename,
              height: asset.height,
              id: asset.id,
              mediaSubtypes: asset.mediaSubtypes ?? [],
              mediaType: asset.mediaType,
              modificationTime: asset.modificationTime,
              uri: asset.uri,
              width: asset.width
          };
            setImages(prevImages => [...prevImages, newImage]);
          }
        } else {
          console.error('Permissão para acessar a biblioteca de mídia não concedida.');
        }
      } catch (error) {
        console.error('Erro ao acessar a galeria:', error);
      }
    } 
  }

  function handleRemovePhoto() {
    setImages([])
  }

  return {
    images,
    handleCamera,
    handleRemovePhoto
  }
}
