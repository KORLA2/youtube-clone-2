export interface VideoInfo{
    id: string,
    snippet:{ 
        title:string,
        description:string,
        thumbnails:{
            medium:{
                url:string,
            }
        },
        channelTitle:string,
        publishedAt:string
    }
    statistics:{
     viewCount:number
     likeCount:number,
     commentCount:number,
    }

    
}
