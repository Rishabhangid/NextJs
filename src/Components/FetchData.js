// 
async function getData() {
    const res = await fetch('https://dummyjson.com/products');
    return await res.json();
}

const FetchData = async () => {
    const data = await getData(); // Now assuming data is an array
    console.log(data, "---------------data---------------");

    return (
        <div>
            <div>FetchData</div>
            {
                data.products.map((item, i) => (
                    <div key={i}>
                        <h1>User ID: {item.userId}</h1>
                        <h1>ID: {item.id}</h1>
                        <h1>Title: {item.title}</h1>
                        <h1>Completed: {item.completed}</h1>
                    </div>
                ))
            }
        </div>
    );
};

export default FetchData;

