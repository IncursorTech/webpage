import { Flex } from '@chakra-ui/react';
// import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { useEffect, useState } from 'react';
import QuizArea from '../components/QuizArea';
import WelcomeArea from '../components/WelcomeArea';

// ChartJS.register(ArcElement, Tooltip, Legend);

export default function Index() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [quizAnswers, setQuizAnswers] = useState([]);

  const handleStart = () => {
    setCurrentPage('quiz');
  };

  const handleFinish = (answers) => {
    setQuizAnswers(answers);
    setCurrentPage('form');
  };

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bgGradient="linear(to-l, #0077ffaa, #ff002baa)">
      {console.log(currentPage)}
      {currentPage === 'welcome' && <WelcomeArea onStart={handleStart} />}
      {currentPage === 'quiz' && <QuizArea onFinish={handleFinish} />}
      {/* {currentPage === "form" && ( <FormArea /> )}
    {currentPage === "result" && ( <ResultArea /> )} */}
    </Flex>
  );
}
