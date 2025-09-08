import listHelper from '../utils/list_helper.js'
import {test,describe} from 'node:test';
import assert from 'node:assert';

test('4.3 dummy returns one', () => {
	const blogs = []
  
	const result = listHelper.dummy(blogs)
	assert.strictEqual(result, 1)
  })

  describe('4.4 total likes', () => {

	test('of empty list is zero', () => {
		const result = listHelper.totalLikes([])
		assert.strictEqual(result, 0)
	  })  
	test('when list has only one blog, equals the likes of that', () => {
	  const result = listHelper.totalLikes([listHelper.OneBlog])
	//  console.log("🚀 ~ result:", result)
	  
	  assert.strictEqual(result, 5)
	})

	test('of a bigger list is calculated right', () => {
        const result = listHelper.totalLikes(listHelper.listWithManyBlogs)
		assert.strictEqual(result, 36)
    })
  })

  describe('4.5 favorite Blog', () => {
	test('if recieved an empty list retunted empty object', () => {
		const result = listHelper.favoriteBlog([])
		assert.deepStrictEqual(result, {})
	  })  
	  test('when list has only one blog, return himself ', () => {
		const result = listHelper.favoriteBlog([listHelper.OneBlog])
		assert.deepStrictEqual(result, listHelper.OneBlog)
	  })  
	  test('of a bigger list is calculated right ', () => {
		const result = listHelper.favoriteBlog(listHelper.listWithManyBlogs)
		const testresult=	{
			_id: "5a422b3a1b54a676234d17f9",
			title: "Canonical string reduction",
			author: "Edsger W. Dijkstra",
			url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
			likes: 12,
			__v: 0
		}



		assert.deepStrictEqual(result, testresult)
	  })  

})


test('4.6 author who has the largest amount of blogs', () => {
  
	const result = listHelper.mostBlogs(listHelper.listWithManyBlogs)
	const mostBlog= {
		   author: 'Robert C. Martin',
		  blogs: 3
		 }


	assert.deepStrictEqual(result, mostBlog)
  })


  test('4.7*: apufunktioita ja yksikkötestejä, step5', () => {
  
	const result = listHelper.mostLikes(listHelper.listWithManyBlogs)
	const mostBlog= {
		   author: 'Edsger W. Dijkstra',
		   likes: 17
		 }


	assert.deepStrictEqual(result, mostBlog)
  })
