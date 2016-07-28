const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('chai').assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');


describe('note api', ()=>{

  before(done => {

    const name = 'notes';
    connection.on( 'open', () => {
      connection.db
      .listCollections({ name })
      .next( (err, collinfo) => {
        if (!collinfo) return done();
        connection.db.dropCollection( name, done );
      });
    });
  });

  const request = chai.request(app);

  const note1 = {
    title: 'note1',
    body: 'note 1 body',
    important: true
  };

  it('gets all notes', done=>{
    request.get('/api/notes')
      .then(res => {
        assert.deepEqual(res.body, []);
        done();
      })
      .catch(done);
  });

  it('adds note1', done=>{
    request.post('/api/notes')
      .send(note1)
      .then(res =>{
        const note = res.body;
        assert.ok(note._id);
        note1.__v = 0;
        note1._id = note._id;
        done();
      })
      .catch(done);
  });

  it('gets note 1 by id', done=>{
    request.get(`/api/notes/${note1._id}`)
      .then(res =>{
        const note = res.body;
        assert.deepEqual(note, note1);
        done();
      })
      .catch(done);
  });

  it('deletes note 1', done=>{
    request.delete(`/api/notes/${note1._id}`)
      .then(res =>{
        assert.equal(res.body, 'Item deleted');
        done();
      })
      .catch(done);
  });

  after(done => connection.close(done));
});
