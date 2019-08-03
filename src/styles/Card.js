import styled from 'styled-components';

const CardHeader = styled.div`
    display         : flex;
    height          : 100px;
    padding         : 15px;
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border          : solid 2px #fefefe;
    align-items     : center;
`
const Card = styled.div`
    display             : flex              ;
    width               : 40%               ;
    border-radius       : 0 0 6px 6px       ;
    align-self          : center            ;
    flex-direction      : column            ;
    box-shadow          : 5px 4px 5px -3px rgba(29, 29, 29, 0.1),0 0 0  1px rgba(0, 0, 0, 0.01);
    margin              : 10px              ;
`;

const Link = styled.a`    
    color: #eee;
    &:hover{
        color: white;
    }
`;

const Photo = styled.div`
    border-radius: 50%;
    display      : block;
    height       : 50px;
    box-shadow   : inset 0 0 0 1px #fff, 0 0 0 3px #fff;
    overflow     : hidden;
    margin       : 10px;

`;

const UserInfo = styled.div`
    color: white;
`;

const Nick = styled.div`
    font-weight: none;
    color      : white;
`;
const Name = styled.div`
    font-weight: bold;
    color      : white;
`;

const CardContent = styled.div`
    background: #fefefe;
`;

const UserData = styled.div`
`;
const OthersInfo = styled.div`
    display       : flex;
    flex-direction: column;
    padding       : 10px;
`;
const Info = styled.div``;


const UserStats = styled.div`
    display: flex;
    
`;

const Stats = styled.div`
    flex           : 1;
    display        : flex;
    justify-content: center;
    align-items    : center;
    flex-direction : column;
    border         : solid 1px #eee;
    border-right   : none;
    padding        : 15px;
    font-size      : 16px;
    color          : #666;
    
    &:first-child {
        border-left: none;
    }
`;

const Circle = styled.div`
    border-radius   : 50%;
    background-color: #eee;
    width           : 10px;
    height          : 10px;
    display         : block;
    margin-right    : 5px;
`;

const Repos = styled.div`
    display  : flex;
    flex-wrap: wrap;
`;
const Repo = styled.div`
    border      : solid 1px #eee;
    border-right: none;
    border-top  : none;
    padding     : 5px;
    width       : 50%;
    min-height  : 40px;
    
    &:nth-child(2n+1) {
        border-left:none
    }
`;

const RepoLink = styled.a`
    
    color      : #3754a9;
    font-weight: bold;
    &:hover{
        color: #7452ac;;
    }
    `

const RepoData = styled.div`
    display      : flex;
    align-content: center;
    align-items  : center;
    
    &.language{
        
        font-weight:bold;
        
    }
`;


export {
    CardHeader
,   Card
,   Link
,   Photo
,   UserInfo
,   Nick
,   Name
,   CardContent
,   UserData
,   OthersInfo
,   Info
,   UserStats
,   Stats
,   Circle
,   Repos
,   Repo
,   RepoLink
,   RepoData
};