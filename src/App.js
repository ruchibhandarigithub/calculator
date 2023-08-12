
import { useState } from 'react';
import './App.css';

function App() {
  const [num1,setNum1] = useState('');
  const [num2,setNum2] = useState('');
  const [result,setResult]= useState('');
  const [error,setError]=useState('');
  const [success,setSuccess]=useState('');
  const performOperation =(operator)=>{
      if(!num1 || !num2  || isNaN(num1) || isNaN(num2)){
        setError('Error!');
        if(!num1){
          setResult('Num1 should not empty');
        }
        else{
          setResult('Num2 should not empty');
        }
        
        setSuccess('')
        

        
      }
      else{
        setSuccess('Success');
        setError('');
      
      const one = parseFloat(num1);
      const two = parseFloat(num2);
      switch(operator){
        case '+':
               setResult('Result:  '+(one+two));
               break;
        case '-':
               setResult('Result:  '+(one-two));
              break;
        case '*':
          setResult('Result:  '+(one*two));
               break; 
        case '/':
          setResult('Result:  '+(one/two));
               break;
        default:
                setResult('');   
      }
    }
  }
  return (
    
      <div className='calculator'>
        <h1>React Calculator</h1>
        <div className='input'>
        <input type="text" placeholder="Num 1" onChange={(e)=> setNum1(e.target.value)} />
        <input type="text" placeholder="Num 2" onChange={ (e)=> setNum2(e.target.value)} /> 
        </div>
        
        <div className='button'>
           <button onClick={()=>performOperation('+')}>+</button>
           <button onClick={()=>performOperation('-')}>-</button>
           <button onClick={()=>performOperation('*')}>*</button>
           <button onClick={()=>performOperation('/')}>/</button>
        </div>
        {
          error && <p className="error">{error}</p>
        }
        {
          success && <p className='success'>{success}</p>
        }
        {
          result && <p className='result'>{result}</p>
        }
      </div>

   
  );
}

export default App;
