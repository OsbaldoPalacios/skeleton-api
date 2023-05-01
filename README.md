# skeleton-api 
MVC 

- services
    - Req y Res

- controllers
    - Todo lo relacionado a las acciones que se hace a la base de datos

- router
    - Ruta y el Verbo HTTP 


Login process
- Mandar email y password
- Busqueda por email encontramos toda la info del usuario
- Id, la password encriptada y role
- Validar si la password es correcta

/api/v1/products/:productId/addToCart
id
token
isActive

Punto de partida

Cuando queremos recuperar una contraseña hago una petición que me pide el email.

/api/v1/auth/recovery-password
    · post crear un nuevo recovery password
        · Llegar al correo electrónico
        · Link que te permite hacer una petición para actualizar tus datos.

/api/v1/auth/recovery-password/:id
    · patch actualizar la contraseña validando el enlace recovery password.
        · cuando mandamos la nueva contraseña pasan 2 cosas
            · Se modifica la contraseña en el usuario
            · Se modifica el recoveryToken como ya usado, para que no se pueda volver a utilizar.