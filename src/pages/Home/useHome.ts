import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../../lib/api';
import { PostCakeValidationFormData, postCakeValidationSchema } from '../../utils/validations/PostCakeValidation/postCakeValidation';

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
  const [isFocused, setIsFocused] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const {
    control,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    }
  } = useForm<PostCakeValidationFormData>({
    resolver: zodResolver(postCakeValidationSchema),
    defaultValues: {
      name: '',
      description: '',
    }
  })

  function hasErrorInput() {
    if(errors.name?.message && errors.description?.message){
      setIsFocused(true)
    } else{ 
      setIsFocused(false)
    }
  }
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

  async function sendCakePost(data: PostCakeValidationFormData){

    try {
      setIsLoading(true)
      // Enviando os dados do formulário para o backend
      
      const response = await api.post('/cakes', data);
      console.log('Resposta do servidor:', response.data);
      alert('Bolo enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar bolo:', error);
      alert('Erro ao enviar bolo. Por favor, tente novamente.');
    } finally {
      setIsLoading(false)
    }
  
    alert('clicou')
    console.log('DAta', data)
    console.log(images[0].uri)    

  }

  function handleRemovePhoto() {
    setImages([])
  }

  return {
    images,
    handleCamera,
    handleRemovePhoto,
    control,
    hasErrorInput,
    isFocused,
    handleSubmit,
    errors,
    isSubmitting,
    sendCakePost,
    isLoading
  }
}
