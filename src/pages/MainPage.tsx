import { Button } from "@/components/ui/button";
import { format } from 'date-fns';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { authState } from "@/Auth/Auth";

const formSchema = z.object({
  inputText: z.string().min(1, {
    message: "Please enter text to translate",
  }),
  sourceLang: z.string().min(1, {
    message: "Please select input language",
  }),
  targetLang: z.string().min(1, {
    message: "please select target language",
  }),
});

export default function Component() {

  return (
    <div className="flex flex-col min-h-[100dvh] ">
      <div className="flex-1 ">
        <TextTranslate />
        <Seperate />
        {/* <VoiceTranslate/>
        <Seperate/> */}
        <History />
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputText: "",
      sourceLang: "",
      targetLang: "",
    },
  });
  const [translatedText, setTranslatedText] = useState(
    "Translated text will appear here"
  );
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/translate`,
        values,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      setTranslatedText(response.data.translatedText); // Assuming response data contains 'translatedText'
    } catch (error) {
      console.error("Translation error:", error);
      setTranslatedText("An error occurred during translation.");
    }

    console.log(values);
  }

  return (
    <div className="container px-4 md:px-6  items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">Translate by Text</h2>
        <p className="text-muted-foreground mb-6">
          Type or paste your text and we'll provide a translation in your
          desired language.
        </p>

        <div className="flex flex-col gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex items-center gap-4">
                <FormField
                  control={form.control}
                  name="sourceLang"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Select source language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="English">English</SelectItem>
                            <SelectItem value="Romanian">Romanian</SelectItem>
                            <SelectItem value="French">French</SelectItem>
                            <SelectItem value="German">German</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="targetLang"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Select source language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="English">English</SelectItem>
                            <SelectItem value="Romanian">Romanian</SelectItem>
                            <SelectItem value="French">French</SelectItem>
                            <SelectItem value="German">German</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="inputText"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Enter text to translate"
                        rows={3}
                        className="flex-1 rounded-md border border-input p-3"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Textarea
                id="translatedText"
                placeholder={translatedText}
                rows={3}
                className="flex-1 rounded-md border border-input p-3"
                readOnly
              />
              <Button size="lg" type="submit">
                Translate
              </Button>
            </form>
          </Form>

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
  interface HistoryEntry {
    _id: string;           
    inputText: string;    
    translatedText: string; 
    sourceLang: string;   
    targetLang: string;   
    createdAt: Date;      
  }
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  async function getHistory() {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/checkHistory`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data.translationHistory);
    // console.log("rerender")
    setHistory(response.data.translationHistory)
  }
  useEffect(()=>{getHistory()},[])
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
          {history.map((entry) => {
            return (
              <div key={entry._id} className="bg-muted p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold">Original Text</h3>
                  <span className="text-sm text-muted-foreground">
                  {format(entry.createdAt, 'yyyy-MM-dd')}
                  </span>
                </div>
                <p>{entry.inputText}</p>

                <div className="flex justify-between items-center mb-2 pt-4">
                  <h3 className="text-lg font-bold">Translated Text</h3>
                  <span className="text-sm text-muted-foreground">
                    {entry.targetLang}
                  </span>
                </div>
                <p>
                  {entry.translatedText}
                </p>
              </div>
            );
          })}
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
