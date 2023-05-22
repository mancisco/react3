

const List = ({ collaborators, searchTerm }) => {
    const filteredCollaborators = collaborators.filter((collaborator) => {
        const searValue = searchTerm.toLowerCase()
        return (
            collaborator.name.toLowerCase().includes(searValue) ||
            collaborator.email.toLowerCase().includes(searValue)
        )
    })
    return (
        <table className="table">
            <thead>
                <tr>
                    <h1 scope="col">listado de colaboradores</h1>
                </tr>
            </thead>
            <tbody>
                {filteredCollaborators.map((collaborator) => {
                    return (
                        <tr key={collaborator.id}>
                            <td>{collaborator.name}</td>
                            <td>{collaborator.email}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>
    )
}

export default List