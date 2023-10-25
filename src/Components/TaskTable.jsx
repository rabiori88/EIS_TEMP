
import {flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table"




export default function TaskTable({data, columnData}) {
    
    const table = useReactTable({
        data,
        columns : columnData,
        getCoreRowModel: getCoreRowModel()
    });

    return ( 
        <div>
            <table className="table-auto">
                <thead>
                    {
                        table.getHeaderGroups().map(headerGroup => <tr className="table_tr" key={headerGroup.id}>
                            {
                        headerGroup.headers.map(
                            header => <th className="p-3 text-sm  table_th" key={header.id}>
                                {header.column.columnDef.header}
                            </th>
                        )
                    }
                        </tr>)
                    }
                </thead>
                <tbody>
                    {
                        table.getRowModel().rows.map(row=> <tr className="table_tr" key={row.id}>
                        { row.getVisibleCells().map(cell => <td className="p-3 text-sm text-gray-700 table_td"key={cell.id}>
                            {
                                flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )
                            }
                        </td>)
                        }
                        </tr>
                        )
                    }
                    {table.getFooterGroups().map(footerGroup => <tr className="table_tr" key={footerGroup.id}>
                    {
                        footerGroup.headers.map(
                            header => <th className="table_th" key={header.id}>
                                {header.column.columnDef.footer}
                            </th>
                        )
                    }
                </tr>)
            }
                </tbody>
            </table>
            {/* <div className="table" w={table.getTotalSize()}>
                {table.getHeaderGroups().map(headerGroup => <div className="tr" key={headerGroup.id}>
                    {
                        headerGroup.headers.map(
                            header => <div className="th" w={header.getSize()} key={header.id}>
                                {header.column.columnDef.header}
                            </div>
                        )
                    }
                </div>)}
                {
                    table.getRowModel().rows.map(row=> <div className="tr" key={row.id}>
                        { row.getVisibleCells().map(cell => <div className="td" w={cell.column.getSize()} key={cell.id}>
                            {
                                flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )
                            }
                        </div>)}
                    </div>
                    )
                    
                }
            </div>
            {table.getFooterGroups().map(footerGroup => <div className="tr" key={footerGroup.id}>
                    {
                        footerGroup.headers.map(
                            header => <div className="th" w={header.getSize()} key={header.id}>
                                {header.column.columnDef.footer}
                            </div>
                        )
                    }
                </div>)
            } */}

        
    </div>            
        
        
    )
};
