import styled from 'styled-components';
import { Wrapper } from '../../styles';


const TextCont = styled.div`
font-size: ${({size}) => 
        size === 'title' && '100px' ||
        size === 'body' && '20px' || 
        size === 'leaderboard' && '40px' || 
        size === 'speech' && '48px' || 
        '20px'
  };
  font-family: ${({size}) => 
        size === 'title' && "'modak'" ||
        size === 'body' &&  "'Baloo 2', cursive" || 
        size === 'leaderboard' && "'Baloo 2', cursive" || 
        size === 'speech' && "'modak'" || 
        "'Baloo 2', cursive"
  };
font-weight: ${({size}) => 
  size === 'title' && "0" ||
  size === 'body' && '700' || 
  size === 'leaderboard' && "700" || 
  size === 'speech' && "0" || 
  "700"
};  
color: ${({col}) => 
col === 'black' && "#363630" ||
col === 'blue' && '#7B89A3' || 
"#363630"
};

`



export default function AppText({
    text="Sample Text",
    style="title",
    c="black"
}){
    
    return (
        <TextCont col={c} size={style}>{text}</TextCont>
    )
}