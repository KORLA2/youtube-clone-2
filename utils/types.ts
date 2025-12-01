export interface VideoInfo{
    id: string,
    snippet:{ 
        title:string,
        categoryId:string,
        description:string,
        thumbnails:{
            medium:{
                url:string,
            }
           
            default:{
                url:string
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
