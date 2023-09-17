import NavBar from "./components/NavBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { ToastContainer } from "react-toastify";
import { toast, Toaster } from 'react-hot-toast';
import state from "./store";
import { MdCheckCircle } from 'react-icons/md';

const alanKey = import.meta.env.VITE_ALAN_API_KEY;


export default function App() {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeArticle, setActiveArticle] = useState(-1);

  state.activeCard = activeArticle;

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: (commandData) => {
        if (commandData.command === "newHeadlines") {
          const termFromAlan = commandData.term;
          setSearchTerm(termFromAlan);
          setActiveArticle(-1);
        }
        else if (commandData.command === "HomePage") {
          navigate("/");
        } else if (commandData.command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
      },
    });
  }, [navigate]);


  useEffect(() => {
    if (searchTerm.length > 1) {
      navigate(`/news/${searchTerm}`);
      setSearchTerm("");
    }
  }, [navigate, searchTerm]);

  useEffect(() => {
    // Enhanced toast notification with an icon
    const showToast = () => toast(
      <div>
        Welcome to our AI Voice-Controlled
        News App 🥳! Click the microphone button in the bottom right corner to start. Try saying, 'What can this website do?'
      </div>
    );
    showToast();
  }, []);



  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 8000,
          style: {
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            fontSize: '16px',
            padding: '16px',
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:term" element={<Feed />} />
      </Routes>
    </div>
  )
}