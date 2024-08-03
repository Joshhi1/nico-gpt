import { AssemblyAI } from 'assemblyai'

// Initialize the AssemblyAI client with your API key
const client = new AssemblyAI({
  apiKey: '8623d1a6b31440e09ff7b17c99af9a43'
})

// Define the URL of the audio file you want to transcribe
const audioUrl = 'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3'

// Configuration object for the transcription request
const config = {
  audio_url: audioUrl
}

const run = async () => {
  try {
    // Send the transcription request
    const transcript = await client.transcripts.transcribe(config)
    
    // Log the transcribed text
    console.log(transcript.text)
  } catch (error) {
    // Handle any errors that occur during transcription
    console.error('Error transcribing audio:', error)
  }
}

// Execute the transcription function
run()
