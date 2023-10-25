import React, { useEffect, useState } from  'react'
import TaskTable from '../../Components/TaskTable'

import DATA from '../../data2'

import LinkCell from '../../Components/LinkCell'
import { useQuery } from '@tanstack/react-query';
import { useServerApi } from '../../context/ServerConnectContext';

export default function BBS010() {

    const [data, setData] = useState(DATA);
    const [total, setTotal] = useState(0);
    
    useEffect(() => {
           
        console.log('fetching....');
        fetch('../../data3.json')
        // .then((res) => {console.log(res)})
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            debugger;
            console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
            setData(data);
            // debugger;
            // var totalMoney = 0;

            // if(data.length >0) {
            //     for (let i = 0; i < data.length; i++) {
            //         totalMoney += data[i].money;                   
            //     }
                
            //     setTotal(totalMoney);
            // }
    
          })
        //   .catch((e) => setError('에러가 발생했음!'))
        //   .finally(() => setLoading(false));
    
        return () => {
          console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
        };
      }, []);
    
    
    //  const {
    //      isLoading,
    //      error,
    //      data: bbs010,
    //  } = useQuery(
    //      ['bbs010', data] , () => test.search(''));

        

     const handleSearch = () => {
        console.log('Btn Click');
    //     setData(DATA);
    //     console.log('handleSearch')
    //     console.log(data)
    //     var totalMoney = 0;

    //     if(data.length >0) {
    //     for (let i = 0; i < data.length; i++) {
    //         totalMoney += data[i].money;
            
    //     }
    //     console.log(totalMoney)
        
    //     }
        
    //     setTotal(totalMoney);
     }

    

    // useEffect(()=> setTotal(totalMoney), []) 

    const columns  = [
        {
            accessorKey: 'task',
            header: 'Task',
            cell: (props) => <p>{props.getValue()}</p>,
            
        },
        {
            accessorKey: 'status',
            header: 'Status',
            cell: (props) => <p>{props.getValue()?.name}</p>,
            
        },
        {
            accessorKey: 'due',
            header: 'Due',
            cell: (props) => <p>{props.getValue()?.toLocaleTimeString()}</p>,
            
        },
        {
            accessorKey: 'notes',
            header: 'Notes',
            cell: (props) => <p>{props.getValue()}</p>,
            
        },
        {
            accessorKey: 'money',
            header: 'Money',
            cell: (props) => <p>{props.getValue()}</p>,
            footer: total
            
        },
        {
            accessorKey: 'link',
            header: 'Link',
            cell: LinkCell
            
            
        }
    
    ]

    return ( 
        <div>
            {/* <Heading mb={10}>공지사항</Heading> */}
            <button onClick={handleSearch}>조회</button>
            <TaskTable data={DATA} columnData={columns}/>
        </div>
    )
}