import {Component} from 'react'
import Header from '../Header'
import Cookies from 'js-cookie'
import React from 'react'
import { useTable } from 'react-table'
import{HomeContainer,ContentContainer,HomeTitle} from './styledComponents'


class TableView extends Component{
    state={
        Details:[]
    }

    componentDidMount(){
        this.getDetails()
    }

    getDetails=async()=>{
        const {Details} = this.state
        const jwtToken = Cookies.get('jwt_token')
        const apiUrl = "https://y5764x56r9.execute-api.ap-south-1.amazonaws.com/mockAPI/posts"
        const options = {
            headers: {
                'Content-Type': 'application/json',
        },
        method:"GET"
        }
        const response = await fetch(apiUrl,options)
        const data = await response.json()
        console.log(data)
        
    }

    render(){
        return(
                <HomeContainer>
                    <Header/>
                    <ContentContainer>
                    <HomeTitle>Observations Assigned To Me</HomeTitle>
                    
                    </ContentContainer>
                </HomeContainer>
        )
    }
}
export default TableView