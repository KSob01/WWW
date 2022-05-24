import {useEffect, useState} from "react";
import GetQuoteHTTP from "../../components/Quotes.module";

export default function Quotes() {
    return(GetQuoteHTTP('/quotes'))
}
