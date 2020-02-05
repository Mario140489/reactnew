import React, { Component } from 'react';

export default class AcessoApi {

 async ApiPost(url,data){
    const headers = new Headers();
    headers.append('content-type','application/json');
    const options = {
      method:'POST',
      headers,
      body:JSON.stringify(data)
    };
    const response = await fetch(url,options);
    const result = await response.json();
    return result
 }
}