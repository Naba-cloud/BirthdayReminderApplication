import React from "react";
import ReactDom from "react-dom";
import Popup from "./Popup";
import "./form.css";

const Form = () => {
  const [person, setperson] = React.useState([
    {
      name: "",
      age: "",
      date: "",
      month: "",
      year: "",
      Gender: "",
      image: (
        <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxnPjxnPjxnPjxnIGlkPSJYTUxJRF8xMTM4XyI+PGcgaWQ9IlhNTElEXzExMzlfIj48ZyBpZD0iWE1MSURfMTIwOV8iPjxnIGlkPSJYTUxJRF8xMjEwXyI+PGcgaWQ9IlhNTElEXzEyMTFfIj48ZyBpZD0iWE1MSURfMTIxMl8iPjxnIGlkPSJYTUxJRF8xMjEzXyI+PGcgaWQ9IlhNTElEXzEyMTRfIj48ZyBpZD0iWE1MSURfMTIxNV8iPjxnIGlkPSJYTUxJRF8xMjE2XyI+PGcgaWQ9IlhNTElEXzEyMTdfIj48ZyBpZD0iWE1MSURfMTIxOF8iPjxnIGlkPSJYTUxJRF8xMjE5XyI+PGcgaWQ9IlhNTElEXzEyMjBfIj48Zz48cGF0aCBkPSJtNTEyIDI1NmMwIDcwLjI0LTI4LjMgMTMzLjg3LTc0LjEgMTgwLjEzLTI1Ljc2IDI2LjAxLTMzOC4wNCAyNi4wMS0zNjMuOCAwLTQ1LjgtNDYuMjYtNzQuMS0xMDkuODktNzQuMS0xODAuMTMgMC0xNDEuMzggMTE0LjYyLTI1NiAyNTYtMjU2czI1NiAxMTQuNjIgMjU2IDI1NnoiIGZpbGw9IiNmYmUyODAiLz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48cGF0aCBkPSJtNTExLjg2NSAyNDcuNzc1LTEzNi43NzUtMTM2Ljc3NS05MC43MTYuNTQxLTEyMi4zODggMTA1LjE5NyAyMzEuNzMyIDIzMS43MzJjMjIuOTIxLTMuMTA1IDM5LjEwOS03LjIxOCA0NC4xODItMTIuMzQgNDUuOC00Ni4yNiA3NC4xLTEwOS44OSA3NC4xLTE4MC4xMyAwLTIuNzUyLS4wNDktNS40OTMtLjEzNS04LjIyNXoiIGZpbGw9IiNlZmM4NTkiLz48cGF0aCBkPSJtMTk5Ljk3IDI1MC4yMzJoMTEyLjA2djExOC44NGgtMTEyLjA2eiIgZmlsbD0iI2VhYTY3OCIvPjxwYXRoIGQ9Im0yNTYgMjUwLjIzNmg1Ni4wM3YxMTguODRoLTU2LjAzeiIgZmlsbD0iI2QzOGM1YiIvPjxwYXRoIGQ9Im0xOTkuOTcgMzMwLjA1aDExMi4wNnYxMTguODRoLTExMi4wNnoiIGZpbGw9IiNmZmMzOTciLz48cGF0aCBkPSJtMjU2IDMzMC4wNWg1Ni4wM3YxMTguODRoLTU2LjAzeiIgZmlsbD0iI2VhYTY3OCIvPjxwYXRoIGQ9Im0zNDQuMjUxIDE1Mi4yMjVjLTMuNzI4LTU2LjYtNDkuNTExLTc3LjUxNy04OC4yNTEtNzcuNTE3cy04NC41MjMgMjAuOTE3LTg4LjI1MSA3Ny41MTdjLTEwLjAxOCAxLjkzOC0xNy4xMzQgMTUuMDc3LTE2LjAxNCAyNS43MDFsMS43MTcgMjQuMTc3YzEuMTc1IDExLjE1NyAxMC45ODIgMTkuMzAxIDIxLjc5IDE4LjA4OWwxLjg2NC0uMjAyYzIyLjEzOSA1OS40NDYgNTYuODU3IDY1LjY0NCA3OC44OTQgNjkuMTI1IDIyLjAzNy0zLjQ4IDU2Ljc1Ni05LjY3OCA3OC44OTQtNjkuMTI1bDEuODY0LjIwMmMxMC44MDcgMS4yMTIgMjAuNjE0LTYuOTMyIDIxLjc5LTE4LjA4OWwxLjcxNy0yNC4xNzdjMS4xMi0xMC42MjQtNS45OTYtMjMuNzYzLTE2LjAxNC0yNS43MDF6IiBmaWxsPSIjZmZjMzk3Ii8+PHBhdGggZD0ibTM2MC4yNjUgMTc3LjkyNi0xLjcxNyAyNC4xNzdjLTEuMTc1IDExLjE1Ny0xMC45ODIgMTkuMzAxLTIxLjc5IDE4LjA4OWwtMS44NjQtLjIwMmMtNy41NjYgMjAuMjkzLTE2LjU5MiAzNC4zODgtMjYuMDc4IDQ0LjI3Ny0xOC4yOTEgMTkuMDgxLTM4LjI5OSAyMi41NTItNTIuODE3IDI0Ljg0N3YtMjE0LjQwNmMzOC43NCAwIDg0LjUyMyAyMC45MTcgODguMjUxIDc3LjUxNyAxMC4wMTkgMS45MzggMTcuMTM1IDE1LjA3NyAxNi4wMTUgMjUuNzAxeiIgZmlsbD0iI2VhYTY3OCIvPjxwYXRoIGQ9Im0zNzUuMDkzIDExMS4wMDJzLTQ1LjI4NS01NC40MDktOTYuOTIzLTY2LjYxNGMtMjMuMzY5LTUuNTIzLTUzLjM5NiAxLjU2MS03My40MjcgMjIuNzE4LTI2LjM5MyAyLjMwOC01Ny40NzggMjMuNDY3LTM5LjY1OCAxMDUuNDIzbDIwLjcwMiAyMy4wNyAxMC41NzQtNTMuNTI2YzIzLjM3OCA2LjQ3NyA3MC43NyAxNS42MSAxMTguOTkzIDEuMzc4bDEwLjMwMiA1Mi4xNDkgMjAuNzAyLTIzLjA3YzMuNjkxLTE3LjQ2MyA0LjczMi0zMS45MiAzLjg1Ni00My45MTMgOC40OTEtNC44NjkgMTYuODMxLTEwLjY4IDI0Ljg3OS0xNy42MTV6IiBmaWxsPSIjYWY1ZTIyIi8+PHBhdGggZD0ibTM1MC4yMSAxMjguNjJjLjg4IDExLjk5LS4xNiAyNi40NC0zLjg1IDQzLjkxbC0yMC43IDIzLjA3LTEwLjMxLTUyLjE1Yy0yMC41MyA2LjA2LTQwLjkxIDcuODgtNTkuMzUgNy40N3YtMTA4LjA3YzcuNjktLjYzIDE1LjIyLS4xIDIyLjE3IDEuNTQgNTEuNjQgMTIuMiA5Ni45MiA2Ni42MSA5Ni45MiA2Ni42MS04LjA0IDYuOTQtMTYuMzggMTIuNzUtMjQuODggMTcuNjJ6IiBmaWxsPSIjODk0OTFkIi8+PHBhdGggZD0ibTM0NS45MiA0OTUuNzVjLTEwLjk2IDQuMTItMjIuMjggNy41LTMzLjg5IDEwLjA5LTE4LjAzIDQuMDQtMzYuNzggNi4xNi01Ni4wMyA2LjE2cy0zOC0yLjEyLTU2LjAzLTYuMTZjLTExLjYxLTIuNTktMjIuOTMtNS45Ny0zMy44OS0xMC4wOWwzMy44OS0xNjUuN2MxMi45MyAyMC43MyAzNC40OCAzMS4wOSA1Ni4wMyAzMS4wOXM0My4xLTEwLjM2IDU2LjAzLTMxLjA5eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im0zNDUuOTIgNDk1Ljc1Yy0xMC45NiA0LjEyLTIyLjI4IDcuNS0zMy44OSAxMC4wOS0xOC4wMyA0LjA0LTM2Ljc4IDYuMTYtNTYuMDMgNi4xNnYtMTUwLjg2YzIxLjU1IDAgNDMuMS0xMC4zNiA1Ni4wMy0zMS4wOXoiIGZpbGw9IiNjZWNlY2UiLz48cGF0aCBkPSJtMTk5Ljk3IDMzMC4wNXYxNzUuNzljLTQ4LjYyLTEwLjg1LTkyLjAzLTM1LjU0LTEyNS44Ny02OS43MXYtNjEuN2MwLTI0LjUxIDE5Ljg3LTQ0LjM4IDQ0LjM4LTQ0LjM4eiIgZmlsbD0iIzMzNmI5MCIvPjxwYXRoIGQ9Im00MzcuOSAzNzQuNDN2NjEuN2MtMzMuODQgMzQuMTctNzcuMjUgNTguODYtMTI1Ljg3IDY5Ljcxdi0xNzUuNzloODEuNDljMjQuNTEgMCA0NC4zOCAxOS44NyA0NC4zOCA0NC4zOHoiIGZpbGw9IiMyMDUwNzciLz48cGF0aCBkPSJtMTU3LjMzIDQxOS42NDV2NzIuNjI1Yy0xMS4xNy00LjY2LTIxLjk1LTEwLjExLTMyLjI1LTE2LjI1di01Ni4zNzV6IiBmaWxsPSIjMjA1MDc3Ii8+PHBhdGggZD0ibTM4Ni45MiA0MTkuNjQ1djU2LjM3NWMtMTAuMyA2LjE0LTIxLjA4IDExLjU5LTMyLjI1IDE2LjI1di03Mi42MjV6IiBmaWxsPSIjMTYzYzY2Ii8+PC9nPjwvc3ZnPg" />
      )
    }
  ]);
  const [name, setname] = React.useState();
  const [date, setDate] = React.useState("");
  const [month, setMonth] = React.useState();
  const [year, setYear] = React.useState();
  const [age, setage] = React.useState();
  const [Gender, setGender] = React.useState("Male");
  const [image, setimage] = React.useState(
    <img
      alt="male"
      src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxnPjxnPjxnPjxnIGlkPSJYTUxJRF8xMTM4XyI+PGcgaWQ9IlhNTElEXzExMzlfIj48ZyBpZD0iWE1MSURfMTIwOV8iPjxnIGlkPSJYTUxJRF8xMjEwXyI+PGcgaWQ9IlhNTElEXzEyMTFfIj48ZyBpZD0iWE1MSURfMTIxMl8iPjxnIGlkPSJYTUxJRF8xMjEzXyI+PGcgaWQ9IlhNTElEXzEyMTRfIj48ZyBpZD0iWE1MSURfMTIxNV8iPjxnIGlkPSJYTUxJRF8xMjE2XyI+PGcgaWQ9IlhNTElEXzEyMTdfIj48ZyBpZD0iWE1MSURfMTIxOF8iPjxnIGlkPSJYTUxJRF8xMjE5XyI+PGcgaWQ9IlhNTElEXzEyMjBfIj48Zz48cGF0aCBkPSJtNTEyIDI1NmMwIDcwLjI0LTI4LjMgMTMzLjg3LTc0LjEgMTgwLjEzLTI1Ljc2IDI2LjAxLTMzOC4wNCAyNi4wMS0zNjMuOCAwLTQ1LjgtNDYuMjYtNzQuMS0xMDkuODktNzQuMS0xODAuMTMgMC0xNDEuMzggMTE0LjYyLTI1NiAyNTYtMjU2czI1NiAxMTQuNjIgMjU2IDI1NnoiIGZpbGw9IiNmYmUyODAiLz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48cGF0aCBkPSJtNTExLjg2NSAyNDcuNzc1LTEzNi43NzUtMTM2Ljc3NS05MC43MTYuNTQxLTEyMi4zODggMTA1LjE5NyAyMzEuNzMyIDIzMS43MzJjMjIuOTIxLTMuMTA1IDM5LjEwOS03LjIxOCA0NC4xODItMTIuMzQgNDUuOC00Ni4yNiA3NC4xLTEwOS44OSA3NC4xLTE4MC4xMyAwLTIuNzUyLS4wNDktNS40OTMtLjEzNS04LjIyNXoiIGZpbGw9IiNlZmM4NTkiLz48cGF0aCBkPSJtMTk5Ljk3IDI1MC4yMzJoMTEyLjA2djExOC44NGgtMTEyLjA2eiIgZmlsbD0iI2VhYTY3OCIvPjxwYXRoIGQ9Im0yNTYgMjUwLjIzNmg1Ni4wM3YxMTguODRoLTU2LjAzeiIgZmlsbD0iI2QzOGM1YiIvPjxwYXRoIGQ9Im0xOTkuOTcgMzMwLjA1aDExMi4wNnYxMTguODRoLTExMi4wNnoiIGZpbGw9IiNmZmMzOTciLz48cGF0aCBkPSJtMjU2IDMzMC4wNWg1Ni4wM3YxMTguODRoLTU2LjAzeiIgZmlsbD0iI2VhYTY3OCIvPjxwYXRoIGQ9Im0zNDQuMjUxIDE1Mi4yMjVjLTMuNzI4LTU2LjYtNDkuNTExLTc3LjUxNy04OC4yNTEtNzcuNTE3cy04NC41MjMgMjAuOTE3LTg4LjI1MSA3Ny41MTdjLTEwLjAxOCAxLjkzOC0xNy4xMzQgMTUuMDc3LTE2LjAxNCAyNS43MDFsMS43MTcgMjQuMTc3YzEuMTc1IDExLjE1NyAxMC45ODIgMTkuMzAxIDIxLjc5IDE4LjA4OWwxLjg2NC0uMjAyYzIyLjEzOSA1OS40NDYgNTYuODU3IDY1LjY0NCA3OC44OTQgNjkuMTI1IDIyLjAzNy0zLjQ4IDU2Ljc1Ni05LjY3OCA3OC44OTQtNjkuMTI1bDEuODY0LjIwMmMxMC44MDcgMS4yMTIgMjAuNjE0LTYuOTMyIDIxLjc5LTE4LjA4OWwxLjcxNy0yNC4xNzdjMS4xMi0xMC42MjQtNS45OTYtMjMuNzYzLTE2LjAxNC0yNS43MDF6IiBmaWxsPSIjZmZjMzk3Ii8+PHBhdGggZD0ibTM2MC4yNjUgMTc3LjkyNi0xLjcxNyAyNC4xNzdjLTEuMTc1IDExLjE1Ny0xMC45ODIgMTkuMzAxLTIxLjc5IDE4LjA4OWwtMS44NjQtLjIwMmMtNy41NjYgMjAuMjkzLTE2LjU5MiAzNC4zODgtMjYuMDc4IDQ0LjI3Ny0xOC4yOTEgMTkuMDgxLTM4LjI5OSAyMi41NTItNTIuODE3IDI0Ljg0N3YtMjE0LjQwNmMzOC43NCAwIDg0LjUyMyAyMC45MTcgODguMjUxIDc3LjUxNyAxMC4wMTkgMS45MzggMTcuMTM1IDE1LjA3NyAxNi4wMTUgMjUuNzAxeiIgZmlsbD0iI2VhYTY3OCIvPjxwYXRoIGQ9Im0zNzUuMDkzIDExMS4wMDJzLTQ1LjI4NS01NC40MDktOTYuOTIzLTY2LjYxNGMtMjMuMzY5LTUuNTIzLTUzLjM5NiAxLjU2MS03My40MjcgMjIuNzE4LTI2LjM5MyAyLjMwOC01Ny40NzggMjMuNDY3LTM5LjY1OCAxMDUuNDIzbDIwLjcwMiAyMy4wNyAxMC41NzQtNTMuNTI2YzIzLjM3OCA2LjQ3NyA3MC43NyAxNS42MSAxMTguOTkzIDEuMzc4bDEwLjMwMiA1Mi4xNDkgMjAuNzAyLTIzLjA3YzMuNjkxLTE3LjQ2MyA0LjczMi0zMS45MiAzLjg1Ni00My45MTMgOC40OTEtNC44NjkgMTYuODMxLTEwLjY4IDI0Ljg3OS0xNy42MTV6IiBmaWxsPSIjYWY1ZTIyIi8+PHBhdGggZD0ibTM1MC4yMSAxMjguNjJjLjg4IDExLjk5LS4xNiAyNi40NC0zLjg1IDQzLjkxbC0yMC43IDIzLjA3LTEwLjMxLTUyLjE1Yy0yMC41MyA2LjA2LTQwLjkxIDcuODgtNTkuMzUgNy40N3YtMTA4LjA3YzcuNjktLjYzIDE1LjIyLS4xIDIyLjE3IDEuNTQgNTEuNjQgMTIuMiA5Ni45MiA2Ni42MSA5Ni45MiA2Ni42MS04LjA0IDYuOTQtMTYuMzggMTIuNzUtMjQuODggMTcuNjJ6IiBmaWxsPSIjODk0OTFkIi8+PHBhdGggZD0ibTM0NS45MiA0OTUuNzVjLTEwLjk2IDQuMTItMjIuMjggNy41LTMzLjg5IDEwLjA5LTE4LjAzIDQuMDQtMzYuNzggNi4xNi01Ni4wMyA2LjE2cy0zOC0yLjEyLTU2LjAzLTYuMTZjLTExLjYxLTIuNTktMjIuOTMtNS45Ny0zMy44OS0xMC4wOWwzMy44OS0xNjUuN2MxMi45MyAyMC43MyAzNC40OCAzMS4wOSA1Ni4wMyAzMS4wOXM0My4xLTEwLjM2IDU2LjAzLTMxLjA5eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im0zNDUuOTIgNDk1Ljc1Yy0xMC45NiA0LjEyLTIyLjI4IDcuNS0zMy44OSAxMC4wOS0xOC4wMyA0LjA0LTM2Ljc4IDYuMTYtNTYuMDMgNi4xNnYtMTUwLjg2YzIxLjU1IDAgNDMuMS0xMC4zNiA1Ni4wMy0zMS4wOXoiIGZpbGw9IiNjZWNlY2UiLz48cGF0aCBkPSJtMTk5Ljk3IDMzMC4wNXYxNzUuNzljLTQ4LjYyLTEwLjg1LTkyLjAzLTM1LjU0LTEyNS44Ny02OS43MXYtNjEuN2MwLTI0LjUxIDE5Ljg3LTQ0LjM4IDQ0LjM4LTQ0LjM4eiIgZmlsbD0iIzMzNmI5MCIvPjxwYXRoIGQ9Im00MzcuOSAzNzQuNDN2NjEuN2MtMzMuODQgMzQuMTctNzcuMjUgNTguODYtMTI1Ljg3IDY5Ljcxdi0xNzUuNzloODEuNDljMjQuNTEgMCA0NC4zOCAxOS44NyA0NC4zOCA0NC4zOHoiIGZpbGw9IiMyMDUwNzciLz48cGF0aCBkPSJtMTU3LjMzIDQxOS42NDV2NzIuNjI1Yy0xMS4xNy00LjY2LTIxLjk1LTEwLjExLTMyLjI1LTE2LjI1di01Ni4zNzV6IiBmaWxsPSIjMjA1MDc3Ii8+PHBhdGggZD0ibTM4Ni45MiA0MTkuNjQ1djU2LjM3NWMtMTAuMyA2LjE0LTIxLjA4IDExLjU5LTMyLjI1IDE2LjI1di03Mi42MjV6IiBmaWxsPSIjMTYzYzY2Ii8+PC9nPjwvc3ZnPg"
    />
  );
  // const [gender, setgender] = React.useState("");
  function getname(e) {
    setname(e.target.value);
  }
  function getdate(e) {
    let dateofbirth = e.target.value;
    let ar1 = [];
    ar1 = dateofbirth.split("-");
    console.log(ar1);
    setYear([ar1[0]]);

    setMonth(ar1[1]);
    setDate(ar1[2]);
    let agecal = new Date().getFullYear() - ar1[0];
    if (agecal > 0) {
      setage(agecal);
    }
  }

  function getgender(e) {
    let a = setGender(e.target.value);
    if (a === "Male") {
      setimage(
        <img
          alt="male"
          src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxnPjxnPjxnPjxnIGlkPSJYTUxJRF8xMTM4XyI+PGcgaWQ9IlhNTElEXzExMzlfIj48ZyBpZD0iWE1MSURfMTIwOV8iPjxnIGlkPSJYTUxJRF8xMjEwXyI+PGcgaWQ9IlhNTElEXzEyMTFfIj48ZyBpZD0iWE1MSURfMTIxMl8iPjxnIGlkPSJYTUxJRF8xMjEzXyI+PGcgaWQ9IlhNTElEXzEyMTRfIj48ZyBpZD0iWE1MSURfMTIxNV8iPjxnIGlkPSJYTUxJRF8xMjE2XyI+PGcgaWQ9IlhNTElEXzEyMTdfIj48ZyBpZD0iWE1MSURfMTIxOF8iPjxnIGlkPSJYTUxJRF8xMjE5XyI+PGcgaWQ9IlhNTElEXzEyMjBfIj48Zz48cGF0aCBkPSJtNTEyIDI1NmMwIDcwLjI0LTI4LjMgMTMzLjg3LTc0LjEgMTgwLjEzLTI1Ljc2IDI2LjAxLTMzOC4wNCAyNi4wMS0zNjMuOCAwLTQ1LjgtNDYuMjYtNzQuMS0xMDkuODktNzQuMS0xODAuMTMgMC0xNDEuMzggMTE0LjYyLTI1NiAyNTYtMjU2czI1NiAxMTQuNjIgMjU2IDI1NnoiIGZpbGw9IiNmYmUyODAiLz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48cGF0aCBkPSJtNTExLjg2NSAyNDcuNzc1LTEzNi43NzUtMTM2Ljc3NS05MC43MTYuNTQxLTEyMi4zODggMTA1LjE5NyAyMzEuNzMyIDIzMS43MzJjMjIuOTIxLTMuMTA1IDM5LjEwOS03LjIxOCA0NC4xODItMTIuMzQgNDUuOC00Ni4yNiA3NC4xLTEwOS44OSA3NC4xLTE4MC4xMyAwLTIuNzUyLS4wNDktNS40OTMtLjEzNS04LjIyNXoiIGZpbGw9IiNlZmM4NTkiLz48cGF0aCBkPSJtMTk5Ljk3IDI1MC4yMzJoMTEyLjA2djExOC44NGgtMTEyLjA2eiIgZmlsbD0iI2VhYTY3OCIvPjxwYXRoIGQ9Im0yNTYgMjUwLjIzNmg1Ni4wM3YxMTguODRoLTU2LjAzeiIgZmlsbD0iI2QzOGM1YiIvPjxwYXRoIGQ9Im0xOTkuOTcgMzMwLjA1aDExMi4wNnYxMTguODRoLTExMi4wNnoiIGZpbGw9IiNmZmMzOTciLz48cGF0aCBkPSJtMjU2IDMzMC4wNWg1Ni4wM3YxMTguODRoLTU2LjAzeiIgZmlsbD0iI2VhYTY3OCIvPjxwYXRoIGQ9Im0zNDQuMjUxIDE1Mi4yMjVjLTMuNzI4LTU2LjYtNDkuNTExLTc3LjUxNy04OC4yNTEtNzcuNTE3cy04NC41MjMgMjAuOTE3LTg4LjI1MSA3Ny41MTdjLTEwLjAxOCAxLjkzOC0xNy4xMzQgMTUuMDc3LTE2LjAxNCAyNS43MDFsMS43MTcgMjQuMTc3YzEuMTc1IDExLjE1NyAxMC45ODIgMTkuMzAxIDIxLjc5IDE4LjA4OWwxLjg2NC0uMjAyYzIyLjEzOSA1OS40NDYgNTYuODU3IDY1LjY0NCA3OC44OTQgNjkuMTI1IDIyLjAzNy0zLjQ4IDU2Ljc1Ni05LjY3OCA3OC44OTQtNjkuMTI1bDEuODY0LjIwMmMxMC44MDcgMS4yMTIgMjAuNjE0LTYuOTMyIDIxLjc5LTE4LjA4OWwxLjcxNy0yNC4xNzdjMS4xMi0xMC42MjQtNS45OTYtMjMuNzYzLTE2LjAxNC0yNS43MDF6IiBmaWxsPSIjZmZjMzk3Ii8+PHBhdGggZD0ibTM2MC4yNjUgMTc3LjkyNi0xLjcxNyAyNC4xNzdjLTEuMTc1IDExLjE1Ny0xMC45ODIgMTkuMzAxLTIxLjc5IDE4LjA4OWwtMS44NjQtLjIwMmMtNy41NjYgMjAuMjkzLTE2LjU5MiAzNC4zODgtMjYuMDc4IDQ0LjI3Ny0xOC4yOTEgMTkuMDgxLTM4LjI5OSAyMi41NTItNTIuODE3IDI0Ljg0N3YtMjE0LjQwNmMzOC43NCAwIDg0LjUyMyAyMC45MTcgODguMjUxIDc3LjUxNyAxMC4wMTkgMS45MzggMTcuMTM1IDE1LjA3NyAxNi4wMTUgMjUuNzAxeiIgZmlsbD0iI2VhYTY3OCIvPjxwYXRoIGQ9Im0zNzUuMDkzIDExMS4wMDJzLTQ1LjI4NS01NC40MDktOTYuOTIzLTY2LjYxNGMtMjMuMzY5LTUuNTIzLTUzLjM5NiAxLjU2MS03My40MjcgMjIuNzE4LTI2LjM5MyAyLjMwOC01Ny40NzggMjMuNDY3LTM5LjY1OCAxMDUuNDIzbDIwLjcwMiAyMy4wNyAxMC41NzQtNTMuNTI2YzIzLjM3OCA2LjQ3NyA3MC43NyAxNS42MSAxMTguOTkzIDEuMzc4bDEwLjMwMiA1Mi4xNDkgMjAuNzAyLTIzLjA3YzMuNjkxLTE3LjQ2MyA0LjczMi0zMS45MiAzLjg1Ni00My45MTMgOC40OTEtNC44NjkgMTYuODMxLTEwLjY4IDI0Ljg3OS0xNy42MTV6IiBmaWxsPSIjYWY1ZTIyIi8+PHBhdGggZD0ibTM1MC4yMSAxMjguNjJjLjg4IDExLjk5LS4xNiAyNi40NC0zLjg1IDQzLjkxbC0yMC43IDIzLjA3LTEwLjMxLTUyLjE1Yy0yMC41MyA2LjA2LTQwLjkxIDcuODgtNTkuMzUgNy40N3YtMTA4LjA3YzcuNjktLjYzIDE1LjIyLS4xIDIyLjE3IDEuNTQgNTEuNjQgMTIuMiA5Ni45MiA2Ni42MSA5Ni45MiA2Ni42MS04LjA0IDYuOTQtMTYuMzggMTIuNzUtMjQuODggMTcuNjJ6IiBmaWxsPSIjODk0OTFkIi8+PHBhdGggZD0ibTM0NS45MiA0OTUuNzVjLTEwLjk2IDQuMTItMjIuMjggNy41LTMzLjg5IDEwLjA5LTE4LjAzIDQuMDQtMzYuNzggNi4xNi01Ni4wMyA2LjE2cy0zOC0yLjEyLTU2LjAzLTYuMTZjLTExLjYxLTIuNTktMjIuOTMtNS45Ny0zMy44OS0xMC4wOWwzMy44OS0xNjUuN2MxMi45MyAyMC43MyAzNC40OCAzMS4wOSA1Ni4wMyAzMS4wOXM0My4xLTEwLjM2IDU2LjAzLTMxLjA5eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im0zNDUuOTIgNDk1Ljc1Yy0xMC45NiA0LjEyLTIyLjI4IDcuNS0zMy44OSAxMC4wOS0xOC4wMyA0LjA0LTM2Ljc4IDYuMTYtNTYuMDMgNi4xNnYtMTUwLjg2YzIxLjU1IDAgNDMuMS0xMC4zNiA1Ni4wMy0zMS4wOXoiIGZpbGw9IiNjZWNlY2UiLz48cGF0aCBkPSJtMTk5Ljk3IDMzMC4wNXYxNzUuNzljLTQ4LjYyLTEwLjg1LTkyLjAzLTM1LjU0LTEyNS44Ny02OS43MXYtNjEuN2MwLTI0LjUxIDE5Ljg3LTQ0LjM4IDQ0LjM4LTQ0LjM4eiIgZmlsbD0iIzMzNmI5MCIvPjxwYXRoIGQ9Im00MzcuOSAzNzQuNDN2NjEuN2MtMzMuODQgMzQuMTctNzcuMjUgNTguODYtMTI1Ljg3IDY5Ljcxdi0xNzUuNzloODEuNDljMjQuNTEgMCA0NC4zOCAxOS44NyA0NC4zOCA0NC4zOHoiIGZpbGw9IiMyMDUwNzciLz48cGF0aCBkPSJtMTU3LjMzIDQxOS42NDV2NzIuNjI1Yy0xMS4xNy00LjY2LTIxLjk1LTEwLjExLTMyLjI1LTE2LjI1di01Ni4zNzV6IiBmaWxsPSIjMjA1MDc3Ii8+PHBhdGggZD0ibTM4Ni45MiA0MTkuNjQ1djU2LjM3NWMtMTAuMyA2LjE0LTIxLjA4IDExLjU5LTMyLjI1IDE2LjI1di03Mi42MjV6IiBmaWxsPSIjMTYzYzY2Ii8+PC9nPjwvc3ZnPg"
        />
      );
    } else {
      setimage(
        <img
          alt="Female"
          src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTQwNi43MDkgNTA0LjQ4NWgtMzAxLjQxOHYtODAuMzU5YzAtNDEuMzQxIDMzLjUxNC03NC44NTUgNzQuODU1LTc0Ljg1NWgxNTEuNzA3YzQxLjM0MSAwIDc0Ljg1NSAzMy41MTQgNzQuODU1IDc0Ljg1NXY4MC4zNTl6IiBmaWxsPSIjODJhZWUzIi8+PHBhdGggZD0ibTM4Ni42NzQgMTIyLjY1M2gtMjYxLjY4MmwtMTcuNDEgMTI4Ljk4NWMtNS40MzcgNDAuMjgzIDI1Ljg4NyA3Ni4xMTkgNjYuNTM1IDc2LjExOWgxNjMuNDMzYzQwLjY0OCAwIDcxLjk3Mi0zNS44MzYgNjYuNTM1LTc2LjExOXoiIGZpbGw9IiM5ZTU1MjgiLz48cGF0aCBkPSJtMjA1Ljc3IDI4MS41OTZ2ODAuMzE5aDEwMC40NmMwLTExLjA4NSAwLTY5LjAxOCAwLTgwLjMxOXoiIGZpbGw9IiNmZmNlYmYiLz48cGF0aCBkPSJtMjA1Ljc2OSAzMTEuNjZjMTUuMTU3IDcuNDQgMzIuMjA1IDExLjYyIDUwLjIzIDExLjYyIDE4LjAyNSAwIDM1LjA3My00LjE3OSA1MC4yMy0xMS42MiAwLTEzLjUwMSAwLTI1LjUzMiAwLTMwLjA2NGgtMTAwLjQ2eiIgZmlsbD0iI2ZmYjA5ZSIvPjxwYXRoIGQ9Im0zNzAuMTYgMTM4LjMxNmMtLjM5NyAwLS43ODkuMDE3LTEuMTgzLjAzLTcuOTctNTUuMjYtNTUuNTExLTk3LjcyMy0xMTIuOTc4LTk3LjcyMy01Ny40NjYgMC0xMDUuMDA4IDQyLjQ2NC0xMTIuOTc4IDk3LjcyMy0uMzkzLS4wMTMtLjc4Ni0uMDMtMS4xODMtLjAzLTE5LjQxMSAwLTM1LjE0NyAxNS43MzYtMzUuMTQ3IDM1LjE0N3MxNS43MzYgMzUuMTQ4IDM1LjE0NyAzNS4xNDhjLjM5NyAwIC43ODktLjAxNyAxLjE4My0uMDMgNy45NyA1NS4yNiA1NS41MTEgOTcuNzIzIDExMi45NzcgOTcuNzIzIDU3LjQ2NiAwIDEwNS4wMDgtNDIuNDYzIDExMi45NzctOTcuNzIzLjM5My4wMTMuNzg2LjAzIDEuMTgzLjAzdi03MC4yOTV6IiBmaWxsPSIjZmZjZWJmIi8+PHBhdGggZD0ibTEyNC45OTIgMTE3LjMwM3YyNS4zMDloOTYuMDc2YzE5LjI5MyAwIDM0LjkzMi0xNS42NCAzNC45MzItMzQuOTMydi04NS4xOTNjMC04LjI2OC02LjcwMy0xNC45NzEtMTQuOTcxLTE0Ljk3MWgtNi4yNWMtNjAuNjM0IDAtMTA5Ljc4NyA0OS4xNTMtMTA5Ljc4NyAxMDkuNzg3eiIgZmlsbD0iI2FjNWUyZSIvPjxwYXRoIGQ9Im0zMzEuODUzIDM0OS4yN2gtMzkuNjA5YzQxLjM0MSAwIDc0Ljg1NSAzMy41MTQgNzQuODU1IDc0Ljg1NXY4MC4zNTloMzkuNjA5di04MC4zNTljLjAwMS00MS4zNDEtMzMuNTEzLTc0Ljg1NS03NC44NTUtNzQuODU1eiIgZmlsbD0iIzUyOGZkOCIvPjxwYXRoIGQ9Im0yMDUuNzcgMzI2LjM4OCA1MC4yMyAzNS41MjctMzYuOTQ0IDM1LjA1NmMtMi4yNTEgMi4xMzYtNS43NiAyLjE5OS04LjA4Ni4xNDRsLTQ3LjMyNC00MS43OThjLTMuMjMzLTIuODU1LTIuNDc4LTguMDg4IDEuNDI5LTkuOTE0eiIgZmlsbD0iI2QzZTFmNSIvPjxwYXRoIGQ9Im0zMDYuMjMgMzI2LjM4OC01MC4yMyAzNS41MjcgMzYuOTQ0IDM1LjA1NmMyLjI1MSAyLjEzNiA1Ljc2IDIuMTk5IDguMDg2LjE0NGw0Ny4zMjQtNDEuNzk4YzMuMjMzLTIuODU1IDIuNDc4LTguMDg4LTEuNDI5LTkuOTE0eiIgZmlsbD0iI2QzZTFmNSIvPjxwYXRoIGQ9Im0yNTYgMzYxLjkxNS02MS40NjQgNTguMzIzYy0zLjA1MiAyLjg5Ni0yLjg3MSA3LjgxNC4zODcgMTAuNDc3bDE5Ljg3OSAxNi4yNWMzLjcxNiAzLjAzOCA5LjMxOSAxLjUxIDEwLjk3OC0yLjk5NXoiIGZpbGw9IiMwMDU1YTMiLz48cGF0aCBkPSJtMzQ2LjkyNSAzNDUuNDAzLTQwLjY5NS0xOS4wMTUtMTEuMjU1IDcuOTYxIDIzLjY1OCAxMS4wNTVjMy45MDcgMS44MjYgNC42NjIgNy4wNTkgMS40MjkgOS45MTRsLTM2Ljc4MSAzMi40ODUgOS42NjIgOS4xNjhjMi4yNTEgMi4xMzYgNS43NiAyLjE5OSA4LjA4Ni4xNDRsNDcuMzI1LTQxLjc5OGMzLjIzMy0yLjg1NSAyLjQ3OS04LjA4OC0xLjQyOS05LjkxNHoiIGZpbGw9IiNjMGQ2ZjIiLz48cGF0aCBkPSJtMjU2IDM2MS45MTUgNjEuNDY0IDU4LjMyM2MzLjA1MiAyLjg5NiAyLjg3MSA3LjgxNC0uMzg3IDEwLjQ3N2wtMTkuODc5IDE2LjI1Yy0zLjcxNiAzLjAzOC05LjMxOSAxLjUxLTEwLjk3OC0yLjk5NXoiIGZpbGw9IiMwMDU1YTMiLz48cGF0aCBkPSJtNDA0LjA4NSAyNTEuNjM4LTE3LjQxLTEyOC45ODVoLTM5LjYwOGwxNy40MSAxMjguOTg1YzMuNjY0IDI3LjE0NS05LjM3NCA1Mi4yNTctMzAuNzAyIDY1Ljc1Ni0yLjc4IDEuNzU5LTMuNTMyIDUuNDczLTEuNTY3IDguMTEyIDEuMDU2IDEuNDE4IDIuNzIxIDIuMjU1IDQuNDg5IDIuMjUzIDIuMTUyLS4wMDIgMy43MTItLjAyNyA1Ljg4Ni0uMTg3IDM4LjE2My0yLjgxMSA2Ni43MTItMzcuMzMxIDYxLjUwMi03NS45MzR6IiBmaWxsPSIjYzg2ZDM2Ii8+PHBhdGggZD0ibTI1NiAyMi40ODd2ODUuMTkzYzAgMTkuMjkzIDE1LjY0IDM0LjkzMiAzNC45MzIgMzQuOTMyaDk2LjA3NnYtMjUuMzA5YzAtNjAuNjM0LTQ5LjE1NC0xMDkuNzg4LTEwOS43ODgtMTA5Ljc4OGgtNi4yNWMtOC4yNjcuMDAxLTE0Ljk3IDYuNzAzLTE0Ljk3IDE0Ljk3MnoiIGZpbGw9IiNhYzVlMmUiLz48cGF0aCBkPSJtMjc3LjIyMSA3LjUxNmMtNi4zNzMgMC05LjkyOS0uNDktMTQuNDA2IDIuNDI3IDQ5LjYzNSAxMC41MzkgODYuODg1IDU0LjU4NSA4Ni44ODUgMTA3LjM2MXYyNS4zMDloMzcuMzA5di0yNS4zMDljLS4wMDEtNjAuNjM1LTQ5LjE1NC0xMDkuNzg4LTEwOS43ODgtMTA5Ljc4OHoiIGZpbGw9IiM5ZTU1MjgiLz48L2c+PGc+PHBhdGggZD0ibTI1NiAyNjIuMzE3YzE1LjAzOCAwIDI3LjI3Mi0xMS4xMjYgMjcuMjcyLTI0LjgwMSAwLTQuMTQyLTMuMzU3LTcuNS03LjUtNy41cy03LjUgMy4zNTgtNy41IDcuNWMwIDUuNDA0LTUuNTA2IDkuODAxLTEyLjI3MiA5LjgwMXMtMTIuMjcyLTQuMzk3LTEyLjI3Mi05LjgwMWMwLTQuMTQyLTMuMzU3LTcuNS03LjUtNy41cy03LjUgMy4zNTgtNy41IDcuNWMwIDEzLjY3NSAxMi4yMzQgMjQuODAxIDI3LjI3MiAyNC44MDF6Ii8+PHBhdGggZD0ibTMwNy43MyAyMDYuNDA0YzQuMTQzIDAgNy41LTMuMzU4IDcuNS03LjV2LTE0LjQ1OWg1LjQ3NmM0LjE0MyAwIDcuNS0zLjM1OCA3LjUtNy41cy0zLjM1Ny03LjUtNy41LTcuNWgtMTIuOTc2Yy00LjE0MyAwLTcuNSAzLjM1OC03LjUgNy41djIxLjk1OWMwIDQuMTQyIDMuMzU4IDcuNSA3LjUgNy41eiIvPjxwYXRoIGQ9Im0xOTEuMjk0IDE4NC40NDVoNS40NzZ2MTQuNDU5YzAgNC4xNDIgMy4zNTcgNy41IDcuNSA3LjVzNy41LTMuMzU4IDcuNS03LjV2LTIxLjk1OWMwLTQuMTQyLTMuMzU3LTcuNS03LjUtNy41aC0xMi45NzZjLTQuMTQzIDAtNy41IDMuMzU4LTcuNSA3LjVzMy4zNTcgNy41IDcuNSA3LjV6Ii8+PHBhdGggZD0ibTM2Mi41MjkgMzQ3LjcyMWMtLjQ4Ny0yLjI5MS0yLjAwNy00LjI0LTQuMTQ3LTUuMjM5bC0xNS44MDctNy4zODZjMjAuNjU3LTEuMzc1IDM5Ljk0Mi0xMS40MiA1Mi45NjEtMjcuNDY4IDEzLjA5NS0xNi4xNDEgMTguNzczLTM2LjM4MSAxNS45OTEtNTYuOTkzbC0xNy4wMS0xMjYuMDE5di03LjMyYzAtMTMuODUxLTIuMzkzLTI3LjQxMy03LjExMi00MC4zMS0xLjQyMy0zLjg4OS01LjcyOC01Ljg4OS05LjYyLTQuNDY2LTMuODkgMS40MjQtNS44OSA1LjczMS00LjQ2NiA5LjYyMSA0LjExMiAxMS4yNCA2LjE5OCAyMy4wNjggNi4xOTggMzUuMTU1djcuODI0IDkuOTg2aC0yOS43NTEtNTguODMxYy0xNS4xMjggMC0yNy40MzUtMTIuMzA3LTI3LjQzNS0yNy40MzV2LTg1LjE5OWMwLTQuMTIgMy4zNTItNy40NzIgNy40NzItNy40NzJoNi4yNWMzMS40MzcgMCA2MC42NzkgMTQuMTUgODAuMjI4IDM4LjgyMSAyLjU3MiAzLjI0NyA3LjI4NyAzLjc5MiAxMC41MzYgMS4yMjEgMy4yNDYtMi41NzIgMy43OTMtNy4yOSAxLjIyLTEwLjUzNi0yMi40MTEtMjguMjg0LTU1LjkzOC00NC41MDYtOTEuOTg0LTQ0LjUwNmgtNi4yNWMtNS43NDcgMC0xMC45OTQgMi4xNzEtMTQuOTcyIDUuNzMyLTMuOTc4LTMuNTYxLTkuMjI1LTUuNzMyLTE0Ljk3Mi01LjczMmgtNi4yNWMtNjQuNjc3IDAtMTE3LjI5NSA1Mi42MTgtMTE3LjI5NSAxMTcuMjk1djIxLjE3NGMtMTEuMzgxIDcuOTI1LTE4LjMwMSAyMC45NC0xOC4zMDEgMzQuOTkgMCA5LjI2OCAyLjk3OSAxNy44NDggOC4wMTkgMjQuODUxbC03LjA2MiA1Mi4zMjRjLTIuODgyIDIxLjM0NiAzLjU5NiA0Mi44OSAxNy43NzEgNTkuMTA4IDEzLjE0MSAxNS4wMzQgMzEuNzA3IDI0LjExIDUxLjUwNyAyNS4zNTdsLTE1LjggNy4zODNjLTIuMTQgMS0zLjY2IDIuOTQ4LTQuMTQ3IDUuMjQtMzAuODI3IDEyLjM4OC01MS42ODkgNDIuNjMzLTUxLjY4OSA3Ni40MTV2MjQuODczYzAgNC4xNDIgMy4zNTcgNy41IDcuNSA3LjVzNy41LTMuMzU4IDcuNS03LjV2LTI0Ljg3M2MwLTI4Ljc0NSAxOC40NjEtNTQuMzcxIDQ1LjM1OC02My42NjNsNDUuODMxIDQwLjQ3OS0xNC42MDEgMTMuODU1Yy0zLjAxNyAyLjg2My00LjY1OSA2Ljg4OC00LjUwNiAxMS4wNDMuMTUzIDQuMTU2IDIuMDg4IDguMDQ5IDUuMzA4IDEwLjY4MmwxOS44OCAxNi4yNTFjMy42MjYgMi45NjQgOC40NzkgMy45ODggMTIuOTgyIDIuNzYgNC41MS0xLjIzIDguMTY3LTQuNTg0IDkuNzgxLTguOTdsMjMuMTg2LTYyLjk1MSAyMy4xODUgNjIuOTVjMy40NDMgOS4zNTcgMTUuMDkzIDEyLjQ4MSAyMi43NjQgNi4yMWwxOS44OC0xNi4yNTFjNi43NTQtNS41MjIgNy4xMjUtMTUuNzI1LjgwMi0yMS43MjVsLTE0LjYwMi0xMy44NTUgNDUuODMyLTQwLjQ4YzI2Ljg5NyA5LjI5MiA0NS4zNTcgMzQuOTE4IDQ1LjM1NyA2My42NjR2NzIuODY0aC0yODYuNDM2di0xMi45OTFjMC00LjE0Mi0zLjM1Ny03LjUtNy41LTcuNXMtNy41IDMuMzU4LTcuNSA3LjV2MTMuNTA0YzAgNy45ODggNi40OTkgMTQuNDg3IDE0LjQ4NiAxNC40ODdoMjg3LjQ2M2M3Ljk4NyAwIDE0LjQ4Ni02LjQ5OSAxNC40ODYtMTQuNDg3di03My4zNzdjLjAwMS0zMy43ODItMjAuODYxLTY0LjAyNy01MS42ODgtNzYuNDE1em05LjM4Ny05Ny4wODctOC4yMzUtNjEuMDAzLTUuMzM1LTM5LjUyNmgyNC40NzVsMTMuODQgMTAyLjUzNmMyLjIyMyAxNi40NjktMi4zMTMgMzIuNjQxLTEyLjc3NCA0NS41MzctMTAuMDk0IDEyLjQ0MS0yNC44ODkgMjAuMzU0LTQwLjczOCAyMS44MjcgMjAuODU4LTE1LjkyNCAzMi40MDktNDIuMzkxIDI4Ljc2Ny02OS4zNzF6bS0yMzkuNDMzLTEzMy4zMzljMC01Ni40MDYgNDUuODktMTAyLjI5NSAxMDIuMjk1LTEwMi4yOTVoNi4yNWM0LjEyIDAgNy40NzIgMy4zNTIgNy40NzIgNy40NzJ2ODUuMTk4YzAgMTUuMTI3LTEyLjMwNyAyNy40MzUtMjcuNDM1IDI3LjQzNWgtODguNTgyem0tNS40NTggMzIuODFjMTA0LjM4MiAwIDExMy4wNTkgNC42NTggMTI4Ljk3NS0xOC4zNyA4LjA2MyAxMS42NjYgMjEuMjI0IDE4LjM3IDM0LjkzNSAxOC4zN2g1Mi4yNzVsLjEzOSAxLjAyOSAxMS4wNzggODIuMDcxYy0uMzQ4LjgzNC0uNjkgMS42NzItMS4wNTggMi40OTUtLjA3MS4xNTktLjEzOC4zMTktLjIxLjQ3Ny0xMC4yMTUgMjIuNTQyLTI3Ljg5IDQwLjgxMi01MC4yMyA1MS43NzgtMTQuOTE5IDcuMzI0LTMwLjg1OSAxMC44NTMtNDYuOTI5IDEwLjg1My00Ny40MTcgMC04OS4zOC0zMS45MzMtMTAyLjQ2OS03Ni45OTMtLjAwNi0uMDItLjAxMS0uMDM5LS4wMTctLjA1OS0xLjM3My00LjczNi0yLjQzNy05LjgxNi0zLjA3Ni0xNC4yNDgtLjIyOS0xLjU4NC0uOTU2LTMuMDM3LTIuMDQxLTQuMTUzLTIuNDY2LTIuNTM3LTUuMTQ4LTIuMjQ3LTYuNTY1LTIuMjQ3LTcuNTQ5IDAtMTQuOTc1LTMuMTE4LTIwLjMzLTguOTM0LS4xMTEtLjEyLS4yMTktLjI0My0uMzI4LS4zNjUtNC4zNDUtNC44ODYtNi45OTItMTEuMzEzLTYuOTkyLTE4LjM1LjAwMS05LjUwNiA0Ljg3OC0xOC4yOTYgMTIuODQzLTIzLjM1NHptMi4xOCAxNDkuNzY1Yy0xMS4zMjctMTIuOTU5LTE2LjUwMy0zMC4xNzMtMTQuMi00Ny4yM2w1LjY4OC00Mi4xNDFjNC42NzIgMi42NzEgMTAuMjg4IDQuNjA0IDE1Ljk0OCA1LjI5NCA2Ljg2NyAzNC44NjEgMjguOTk3IDY1Ljg2MiA2MS42MjcgODMuNDY2djIxLjAwMmgtMjQuMTU1Yy0xNy4yMTQgMC0zMy41ODItNy40MzItNDQuOTA4LTIwLjM5MXptODkuNzgzIDE0MC44NDUtMTguODcxLTE1LjQyNyAzNy43NDMtMzUuODE0em0tNC4wOTMtNTAuMTI5LTQ0LjU2Mi0zOS4zNTkgMzQuMTcxLTE1Ljk2N2guODE0bDM4Ljg5MyAyNy41MDh6bS0xLjYyOC02OC4wNzV2LTE2LjQxNWMxMy42MDQgNS4xMjIgMjcuOTMxIDcuNzEyIDQyLjczMyA3LjcxMiAxNC4zNzggMCAyOC44NzctMi40OTQgNDIuNzMzLTcuNzEydjE2LjQxNWwtNDIuNzMzIDMwLjIyNHptOTguNjE2IDEwMi43NzctMTguODcxIDE1LjQyNy0xOC44NzItNTEuMjQxem0tMTQuNzc4LTM0LjcwMi0yOS4zMTUtMjcuODE2IDM4Ljg5My0yNy41MDhoLjgxNGwzNC4xNzEgMTUuOTY3em0zMi42NjQtNzkuNTI2Yy0zLjEwNyAxLjk2Ni01LjI3MSA1LjE1OC01LjkzOCA4Ljc1NS0uMDI4LjE0OC0uMDUzLjI5Ny0uMDc1LjQ0NmgtMTAuMDIydi0yMS4wMDJjMTYuOTQ1LTkuMTQxIDMyLjM5NC0yMi43NDggNDMuODMyLTQwLjEwMy41MDIgMjEuMjg2LTEwLjQ2NiA0MC45MzItMjcuNzk3IDUxLjkwNHoiLz48L2c+PC9nPjwvc3ZnPg=="
        />
      );
    }
  }
  function addData(e) {
    e.preventDefault();

    // setperson([...person, age]);

    const data = {
      name,
      age,
      date,
      month,
      year,
      Gender,
      image
    };

    if (name !== null && Gender !== "" && date !== "") {
      setperson([...person, data]);

      console.log(c);

      setperson([...person, data]);
      let a = (this.nameval.value = "");
      setname(a);
      let b = (this.dateval.value = "");
      setDate(b);
      let c = (this.genderval.value = "");
      setGender(c);

      console.log(c);
      // localStorage.setItem(person, JSON.stringify(person));
    } else {
      alert("Fill Fields");
    }
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="container-fluid bg-light w-75"
      >
        <h1 className="m-3 p-3 text-center">Birthday Reminder Application</h1>
        <label>Name: &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;</label>{" "}
        <input
          onChange={getname}
          required
          className="m-3 nameinp w-25"
          type="text"
          id="nameval"
        />{" "}
        <br />
        <br /> <label>Date Of Birth:</label>
        <input
          onChange={getdate}
          placeholder="dd"
          className="m-3 btn btn-light w-75"
          type="date"
          id="dateval"
        />
        <br />
        <label>Gender</label>&nbsp; &nbsp;&nbsp;&nbsp;
        <select id="genderval" onChange={getgender} className="btn  w-50 m-3">
          Choose gender{" "}
          <option value="Male" className="btn m-3">
            Male
          </option>
          <option value="Female" className="btn m-3">
            Female
          </option>
        </select>
        <br />
        <br />
        <br />
        <button onClick={addData} className="w-25 btn btn-primary m-3">
          Add
        </button>
        <br />
      </form>

      <br />

      {person.map((element, key) => {
        if (
          element.date == new Date().getDate() &&
          element.month == new Date().getMonth() + 1
        ) {
          return (
            <>
              <div className="container-fluid w-50 bg-info text-center m-3 p-3">
                Person {element.name} Birthday {key}
                <br />
                ----------------------------------
                <div className="row text-center">
                  <div class="col-lg-1">
                    {element.image}
                    <br />
                  </div>
                  <div className="col-lg-2">
                    {element.name}
                    <br />
                    {element.age}
                    <br />
                    Hi birthday on {element.date} Of &nbsp;{element.month}th
                    month
                  </div>
                  <div className="col-lg-3">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        let arr = [...person];
                        arr.splice(key, 1);
                        setperson(arr);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
};

export default Form;
