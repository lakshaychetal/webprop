declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': any;
  }
}

interface Window {
  gtag: (command: string, action: string, params?: any) => void;
  SpeechRecognition: any;
  webkitSpeechRecognition: any;
}
