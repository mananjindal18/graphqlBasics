const app = require("../index");
const supertest = require("supertest");
const request = supertest(app);
test("fetch users", (done) => {
    request
      .post("/graphql")
      .send({
        query: `query{
            getAllPayment{
              isSuccess
              data {
                paymentID
                price
              }
              message
            }
          }
          `,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body).toBeInstanceOf(Object);
        console.log(res.body.data.getAllPayment.isSuccess);
        expect(res.body.data.getAllPayment.isSuccess).toEqual(true);
        done();
      });
  });
