import { AutoFocus, Camera, CameraType, FlashMode } from 'expo-camera';
import { useRef, useState, useEffect, toSTring } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import CaptureButton from "./src/components/CaptureButton";
import IconButton from './src/components/IconButton';
import Counter from './src/components/Counter';
import TopContainer from './src/containers/TopContainer';
import BottomContainer from './src/containers/BottomContainer';
import BodyContainer from './src/containers/BodyContainer';
import SongCard from './src/components/SongCard';
import { StatusBar } from "expo-status-bar";

export default function App() {

  const [type, setType] = useState(CameraType.back);
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  const [autofocus, setAutoFocus] = useState(AutoFocus.off);
  const [zoom, setZoom] = useState(Camera.zoom = 0);
  const [recoding, setIsRecording] = useState(false);
  const ref = useRef(null);

  const [count, setCount] = useState(20);

  const [video, setVideo] = useState();


  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();



  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
    
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMicrophonePermission(microphonePermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);


useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 0 && !recoding) {
          stopRecording();
          setCount(1000)
        }
        return prevCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function showAlert() {
    Alert.alert(
      'Are you sure?',
      'Do you want to save that masterpiec?',
      [
        {
          text: 'Save',
          onPress: () => saveVideo() | console.log('Yes pressed')
        },
        {
          text: 'Redo',
          onPress: () => console.log('No pressed'),
          style: 'cancel'
        }
      ]
    );
  }

  async function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  function toggleFlash() {
    setFlashMode(current => (current === FlashMode.off ? FlashMode.torch : FlashMode.off));
  }

  function toggleAutofocus() {
    setAutoFocus(current => (current === AutoFocus.off ? AutoFocus.on : AutoFocus.off));
  }

  function zoomCameraIn() {
    setZoom(current => (current + 0.05 < 1 ? Camera.zoom += 0.05 : Camera.zoom = 0));
    console.log(Camera.zoom)
  }

  function zoomCameraOut() {
    setZoom(current => (current - 0.05 > 1 ? Camera.zoom -=0.05 : Camera.zoom = 0));
    console.log(Camera.zoom)
  }


   function recordVideo() {
    setIsRecording(true);
    setCount(20)
    let options = {
      quality: "1080p",
      mute: false
    };

    ref.current.recordAsync(options).then((recordedVideo) => {
      setVideo(recordedVideo);
      setIsRecording(false);
      console.log(video.uri)
    });
  };


   async function stopRecording(){
    try{
      ref.current.stopRecording();
      setIsRecording(false)
      console.log(video)
    }catch (error) {
      console.error(error);
    }
    showAlert();
  }

  async function saveVideo() {
    MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
      setVideo(undefined);
    });

  }


  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} flashMode={flashMode} ref={ref} autoFocus={autofocus} zoom={zoom} >
        <StatusBar hidden={true} />
        <TopContainer>
        <IconButton icon={flashMode == FlashMode.off ? "flash-off-outline" : "flash-outline"} onPress={toggleFlash} size="35" color="white" />
        <IconButton icon="aperture-outline" onPress={toggleAutofocus} size="35" color="white"/>
        <IconButton icon="sync-outline" onPress={toggleCameraType} size="35" color="white"/>
        </TopContainer>

        <BodyContainer> 
        <Counter counter={recoding == true ? count : "20"}/>
        </BodyContainer>
      
        <BottomContainer>
        <IconButton icon="add-circle-outline" onPress={zoomCameraIn} size="35" color="white" />
        <CaptureButton  color={recoding == true ? "#bf244b" : "#fff"} onPress={recoding == false ? recordVideo : stopRecording}/>
        <IconButton icon="remove-circle-outline" onPress={zoomCameraOut} size="35" color="white"/>
        </BottomContainer>

      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },

});

