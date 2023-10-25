
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function LinkCell({ getValue, row, column, table }) {
    const navigate = useNavigate(); 
    
    const [openModal, setOpenModal] = useState(false);

    const initialValue = getValue();
    const [value, setValue] = useState(initialValue);

    // const onBlur = () => {
    //     table.options.meta?.updateData(row.index, column.id, value);
    // };
    
      // If the initialValue is changed external, sync it up with our state
    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);
    

    return ( 
        <div>
            <a
            
            className="font-bold text-white-500 hover:underline "
            value= {value}
            onClick={(e) => detail_LinkToPage('test')}>
            {value}
            </a>
            {/* <DefaultPopup></DefaultPopup>               */}
            
        </div>
        
    )

    function detail_LinkToPage(id)
    {
        setOpenModal(true);
    }
    
   
}


