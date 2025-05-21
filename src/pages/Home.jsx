import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MovieList from "../components/movie/MovieList";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar/>
          <MovieList/>
        </div>
      </main>
      <Footer/>
    </>
  );
}
