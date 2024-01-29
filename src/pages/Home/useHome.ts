import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';

export function useHome() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [type, setType] = useState(CameraType.back);

  async function handleCamera() {
    if(permission?.granted) {
     setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    } else {
      requestPermission()
    }
  }
  return {
    handleCamera
  }
}