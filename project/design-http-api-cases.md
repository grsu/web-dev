# Product catalog

PUT /cart/product/:id
{ count: 0 }

POST /cart
{ product: id, count: 4 }

DELETE /cart
{  }

/product/all
/product/:id

---

POST client -/-> server x 1
POST client -/-> server x 2

PUT /post/:id-from-s13 -/-> x 1, 0
PUT /post/:id-from-s13 --> x 1, !==2

GET /users/:userId/comments
GET /comments/?userId=:userId

PUT /users/:userId/comments/:commentId
PUT /comments/:commentId

comment = fetch(:commentId)
if (cooment.author === req.user) {
  update()
}

/cafe/id
/cafe/:id/info?d=:aa
/cafe/12 /cate/45454


---

/weather/:city/current
/weather/:city/future/next-hour
/weather/:city/future/weekend
