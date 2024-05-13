import React, {useEffect, useState} from "react";

function LandingPage() {
  const [pageData, setPageData] = useState();
  const rootUrl = 'http://localhost:8080'

  const fetchRootApi = async () => {
    await fetch(`${rootUrl}`)
    .then((response) => response.json())
    .then((data) => setPageData(data))
  }
  useEffect(() => {
    fetchRootApi();
  }, [])

  if (pageData) {
    return (
      <>
        <h1>yee we landed tho</h1>
        <div>{pageData.map((element) => (
          <div>{element}</div>
        ))}
        </div>
        <span>{pageData.length}</span>
      </>
    )
  }
}

export default LandingPage;
