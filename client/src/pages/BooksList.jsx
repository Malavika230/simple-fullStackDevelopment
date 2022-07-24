import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import './react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class BooksList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllBooks().then(books => {
            this.setState({
                books: books.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { books, isLoading } = this.state
        console.log('TCL: BooksList -> render -> books', books)

        const columns = [
            {
                Header: 'Book',
                accessor: 'Book',
                filterable: true,
            },
            {
                Header: 'Auther',
                accessor: 'Auther',
                filterable: true,
            },
            {
                Header: 'Publication_date',
                accessor: 'Publication_date',
                filterable: true,
            },
            {
                Header: 'Publisher',
                accessor: 'Publisher',
                filterable: true,
            },
			{
                Header: 'Language',
                accessor: 'Language',
                filterable: true,
            },
			{
                Header: 'Country',
                accessor: 'Country',
                filterable: true,
            },
        ]

        let showTable = true
        if (!books.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={books}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={5}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default BooksList