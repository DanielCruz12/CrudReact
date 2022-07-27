import { Fragment, useState } from "react";
import Swal from "sweetalert";

export const TaskTable = ({
  crearTareas,
  crearDescripcion,
  tasks,
  ToggleTask,
  descripcion,
  showCompleted = false,
}) => {
  const [nuevoNombreTarea, setNuevoNombreTarea] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevoNombreTarea && desc.trim().length > 0) {
      crearTareas(nuevoNombreTarea);
      crearDescripcion(desc);
      Swal("Good job!", "Tarea agregada", "success");
      setNuevoNombreTarea("");
      setDesc("");
    } else {
      Swal( "Oops" ,  "Por favor llena todos los campos" ,  "error");
      setNuevoNombreTarea("");
      setDesc("");
    }
    //localStorage.setItem("task", nuevoNombreTarea);
  };

  //   const taskTableRow = (doneValue) => {
  //     return tasks
  //       .filter((tarea) => tarea.done === doneValue)
  //     };

  //     const showTask = () => {
  //         tasks.map((tarea) => (
  //           <TaskRow tarea={tarea} key={tarea.name} ToggleTask={ToggleTask} />
  //         ));

  //   }

  return (
    // <table>
    //   <thead>
    //     <tr>
    //       {showCompleted === true && (
    //         <th>tareas completas</th>
    //       ) }
    //     </tr>
    //   </thead>
    //   <tbody>{taskTableRow(showCompleted)}</tbody>
    // </table>

    <>
    
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card" id="list1">
                <div className="card-body py-4 px-4 px-md-5">
                  <p className="h1 text-center mt-3 mb-4 pb-3 text-primary" >
                    <i className="fas fa-check-square me-1"></i>
                    <u>Lista de tareas</u>
                  </p>

                  <form className="pb-2" onSubmit={handleSubmit}>
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex flex-row align-items-center">
                          <input
                            className="form-control form-control-lg"
                            id="exampleFormControlInput1"
                            type="text"
                            placeholder="añade una tarea"
                            value={nuevoNombreTarea}
                            onChange={(e) =>
                              setNuevoNombreTarea(e.target.value)
                            }
                          ></input>
                          <input
                            className="form-control form-control-lg"
                            id="exampleFormControlInput2"
                            type="text"
                            placeholder="añade una descripcion"
                            value={desc}
                            onChange={(e) =>
                              setDesc(e.target.value)
                            }
                          ></input>
                          <div>
                            <button
                              className="btn btn-primary m-2"
                              type="submit"
                            >
                              Añadir
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>

                  <hr className="my-4" />

                  <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                    <p className="small mb-0 me-2 text-muted">Area</p>
                    <select className="select">
                      <option value="1">Desarrollo web</option>
                      <option value="2">Desarrollo movil</option>
                      <option value="3">Videojuegos</option>
                      <option value="3">Realidad virtual</option>
                      <option value="3">Machine learning</option>
                      <option value="4">Seguridad informatica</option>
                    </select>
                    <p className="small mb-0 ms-4 me-2 text-muted">Personal</p>
                    <select className="select">
                      <option value="1">Jorgem, Emerson, Juan</option>
                      <option value="2">Daniel, Carlos, Victor</option>
                    </select>
                    <a href="#!" data-mdb-toggle="tooltip" title="Ascending">
                      <i className="fas fa-sort-amount-down-alt ms-2"></i>
                    </a>
                  </div>

                  <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
                    <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                      <div className="form-check">
                        <input
                          className="form-check-input me-0"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked1"
                          aria-label="..."
                        />
                      </div>
                    </li>
                    <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                      <p className="lead fw-normal mb-0">Buy groceries</p>
                    </li>
                  </ul>

                  <ul className="list-group list-group-horizontal rounded-0">
                    <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                      <div className="form-check">
                        <input
                          className="form-check-input me-0"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked2"
                          aria-label="..."
                        />
                      </div>
                    </li>
                    <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                      <p className="lead fw-normal mb-0">Renew car</p>
                    </li>
                  </ul>
                 
                  {tasks.map((tareas) => (
                    <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
                      <Fragment key={tareas.name}>
                        <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                          <div className="form-check">
                            <input
                              className="form-check-input me-0"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked1"
                              aria-label="..."
                              onChange={() => ToggleTask(tareas)}
                            />
                          </div>
                        </li>

                        <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                          <p className="lead fw-normal mb-0">{tareas.name}</p>
                        </li>
                      </Fragment>
                    </ul>
                  ))}  

                  {descripcion.map((text) => (
                      <div key={text.descrip}>
                          <p className="lead fw-normal mb-0">{text.descrip}</p>
                      </div>
                  ))}  

                  {/* footer
                  <ul className="list-group list-group-horizontal rounded-0 mb-2">
                    <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                      <p className="lead fw-normal mb-0 bg-light w-100 ms-n2 ps-2 py-1 rounded">
                        Sign up for online course
                      </p>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
