function Login() { // comeca o typescript



    //termina typescript
return (

    <div

      style={{

        height: "100vh",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        backgroundColor: "#f0f2f5",

        fontFamily: "Arial",

      }}

    >

      <div

        style={{

          backgroundColor: "white",

          padding: "30px",

          borderRadius: "10px",

          width: "300px",

          boxShadow: "0 0 10px rgba(0,0,0,0.1)",

        }}

      >

        <h1

          style={{

            textAlign: "center",

            marginBottom: "20px",

            color: "#2563eb",

          }}

        >

          STNG

        </h1>

        <input

          type="text"

          placeholder="Usuario"

          value={usuario}

          onChange={(e) => setUsuario(e.target.value)}

          style={{

            width: "100%",

            padding: "10px",

            marginBottom: "15px",

            borderRadius: "5px",

            border: "1px solid #ccc",

          }}

        />

        <input

          type="password"

          placeholder="Contraseña"

          value={password}

          onChange={(e) => setPassword(e.target.value)}

          style={{

            width: "100%",

            padding: "10px",

            marginBottom: "20px",

            borderRadius: "5px",

            border: "1px solid #ccc",

          }}

        />

        <button

          onClick={iniciar}

          style={{

            width: "100%",

            padding: "10px",

            backgroundColor: "#2563eb",

            color: "white",

            border: "none",

            borderRadius: "5px",

            cursor: "pointer",

          }}

        >

          Iniciar

        </button>

      </div>

    </div>

  );

};

export default Longinos;