import {Sidebar} from "./components/sidebar/sidebar.tsx";
import {Navbar} from "./components/navbar/navbar.tsx";

function App() {
    return (
        <div>
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
                    <>
                        <button
                            type="button"
                            onClick={() => {
                            }}
                            style={{background: 'blue', borderRadius: '50%'}}
                            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                        >
                            Иконка
                        </button>
                    </>

                </div>
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                    <Sidebar/>
                </div>
                <div className='dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full'>
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                        <Navbar/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App

