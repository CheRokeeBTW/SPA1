'use client';

import CreateNewCard from './products/components/CreateNew';
import ShowAllCards from './products/components/AllCards'

export default function ProductBtn(){

     return(
        <div>
        <ShowAllCards></ShowAllCards>
        <CreateNewCard></CreateNewCard>
        </div>
        )
}