<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Post;
use Inertia\Inertia;
use Inertia\Response;


class PostsController extends Controller
{
    public function index(){
        $posts = Post::all();
        return Inertia::render('Posts/Index', [
            'posts'=> $posts,
        ]);
    }

    public function create(){
        return Inertia::render('Posts/Create');
    }

    public function store(Request $request)
    {
        Post::create($request->all());

        return to_route('posts.index');
    }

    public function edit(Post $post): Response
    {
        return Inertia::render('Posts/Edit', [
            'blog' => $post,
        ]);
    }

    public function update(Post $post, Request $request)
    {

        $post->fill($request->all());     

        $post->update();

        return to_route('posts.index');
    }

    public function destroy(Post $post, Request $request)
    {
        $post->delete();

        return to_route('posts.index');
    }
}
