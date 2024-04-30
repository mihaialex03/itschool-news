import React from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
export default function NewsCategory() {
    // extrag parametru categoryId din URL
    const {categoryId} = useParams();
    return (
        <Layout>
            <p>Aici sunt toate stirile din cateogria {categoryId}</p>
        </Layout>
    )
}