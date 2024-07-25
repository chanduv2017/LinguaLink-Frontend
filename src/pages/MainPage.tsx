import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MicIcon } from "@/icons/icons";
import { Separator } from "@/components/ui/separator";



export default function Component() {
  
  return (
    <div className="flex flex-col min-h-[100dvh] ">
      <div className="flex-1 ">
        <TextTranslate />
        <Seperate/>
        <VoiceTranslate/>
        <Seperate/>
        <History/>
      </div>
    </div>
  );
}

function Seperate() {
  return (
    <div className="container py-6">
      <Separator />
    </div>
  );
}

function TextTranslate() {
  return (
    <div className="container px-4 md:px-6  items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">Translate by Text</h2>
        <p className="text-muted-foreground mb-6">
          Type or paste your text and we'll provide a translation in your
          desired language.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select source language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select target language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Textarea
            placeholder="Enter text to translate"
            rows={3}
            className="flex-1 rounded-md border border-input p-3"
          />
          <Textarea
            placeholder="Translated text will appear here"
            rows={3}
            className="flex-1 rounded-md border border-input p-3"
            readOnly
          />
          <Button size="lg" type="submit">
            Translate
          </Button>
          <p className="text-muted-foreground">
            Our text translation feature allows you to easily translate written
            content from one language to another. Simply enter your source text
            in the top text area, select your source and target languages, and
            click the Translate button. The translated text will be displayed in
            the bottom text area.
          </p>
        </div>
      </div>
    </div>
  );
}

function VoiceTranslate() {
  return (
    <div id="voice-input" className="container px-4  md:px-6 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">Translate by Voice</h2>
        <p className="text-muted-foreground mb-6">
          Simply speak into your microphone and we'll translate your words in
          real-time.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row  items-center gap-4">
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select source language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select target language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
              </SelectContent>
            </Select>
            <Button size="lg" className="flex items-center gap-2">
              <MicIcon className="w-5 h-5" />
              Start Voice Translation
            </Button>
          </div>
          <Textarea
            placeholder="Translated text will appear here"
            className="flex-1 rounded-md border border-input p-3"
            rows={3}
            readOnly
          />
          <p className="text-muted-foreground">
            Our voice translation feature uses advanced speech recognition and
            machine translation technology to provide accurate and real-time
            translations. Simply select your source and target languages, then
            click the microphone button to start speaking. The translated text
            will be displayed in the text area below.
          </p>
        </div>
      </div>
    </div>
  );
}
function History() {
  return (
    <div
      id="translation-history"
      className="container px-4  md:px-6 items-center"
    >
      <div>
        <h2 className="text-3xl font-bold mb-4">Translation History</h2>
        <p className="text-muted-foreground mb-6">
          View your past translations and their details.
        </p>
        <div className="grid gap-4">
          <div className="bg-muted p-4 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">Original Text</h3>
              <span className="text-sm text-muted-foreground">
                Aug 24, 2023
              </span>
            </div>
            <p>The quick brown fox jumps over the lazy dog.</p>
          </div>
          <div className="bg-muted p-4 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">Translated Text</h3>
              <span className="text-sm text-muted-foreground">
                Aug 24, 2023
              </span>
            </div>
            <p>Le renard brun rapide saute par-dessus le chien paresseux.</p>
          </div>
          <div className="bg-muted p-4 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">Original Text</h3>
              <span className="text-sm text-muted-foreground">
                Aug 23, 2023
              </span>
            </div>
            <p>Hola, ¿cómo estás?</p>
          </div>
          <div className="bg-muted p-4 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">Translated Text</h3>
              <span className="text-sm text-muted-foreground">
                Aug 23, 2023
              </span>
            </div>
            <p>Hello, how are you?</p>
          </div>
          <div className="bg-muted p-4 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">Original Text</h3>
              <span className="text-sm text-muted-foreground">
                Aug 22, 2023
              </span>
            </div>
            <p>Je suis désolé, je ne parle pas français.</p>
          </div>
          <div className="bg-muted p-4 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">Translated Text</h3>
              <span className="text-sm text-muted-foreground">
                Aug 22, 2023
              </span>
            </div>
            <p>I'm sorry, I don't speak French.</p>
          </div>
        </div>
        <p className="text-muted-foreground mt-4">
          Our translation history feature keeps track of all your past
          translations, allowing you to easily review and reference them. Each
          entry includes the original text, the translated text, and the date
          the translation was perdived.
        </p>
      </div>
    </div>
  );
}
