import React, { useEffect, useState } from "react"
import { Card } from "../../components/blog/Card"
import { Category } from "../../components/category/Category"
import { useLocation } from "react-router-dom"
import { Axios } from "../../utils/requestMethods"

export const Home = () => {
  const [posts, setPosts] = useState([])

  const { search } = useLocation()


  useEffect(() => {
    const fetchPost = async () => {
      const res = await Axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPost()
  }, [search])
  return (
    <>
      <Category />
      <Card posts={posts} />
    </>
  )
}
