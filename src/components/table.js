import { useTable, usePagination } from 'react-table'
import React from 'react';

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 2 },
    },
        usePagination
    )

    // Render the UI for your table
    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover" {...getTableProps()}>
                {/* <caption>List of users</caption> */}
                <thead className="thead">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            { /* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */ }
            <nav aria-label="Page navigation example">
                <div className="pagination">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" style={{ cursor: 'pointer' }} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</a></li>
                        <li className="page-item"><a className="page-link" style={{ cursor: 'pointer' }} onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</a></li>
                        <li className="page-item"><a className="page-link" style={{ cursor: 'pointer' }} onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</a></li>
                        <li className="page-item"><a className="page-link" style={{ cursor: 'pointer' }} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</a></li>
                        <li className="page-item disabled">
                            <div className="page-link" >Page{' '}
                                <strong >
                                    {pageIndex + 1} of {pageOptions.length}
                                </strong>{' '}
                            </div>
                        </li>
                        <li className="page-item">
                            | Go to page:{' '}
                            <input
                                type="number"
                                defaultValue={pageIndex + 1}
                                onChange={e => {
                                    const gotopage = e.target.value ? Number(e.target.value) - 1 : 0
                                    gotoPage(gotopage)
                                }}
                                style={{ width: '100px' }}
                            />
                        </li>
                        <li className="page-item">
                            <select className="custom-select"
                                value={pageSize}
                                onChange={e => {
                                    setPageSize(Number(e.target.value))
                                }}
                            >
                                {[10, 20, 30, 40, 50].map(pageSize => (
                                    <option key={pageSize} value={pageSize}>
                                        Show {pageSize}
                                    </option>
                                ))}
                            </select>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default Table