export default function() {
  this.namespace = 'api';

  this.get('/articles', () => ({
    data: [{
      type: 'articles',
      id: 1,
      attributes: {
        title: 'Rails is Omakase'
      }
    }]
  }));
}
