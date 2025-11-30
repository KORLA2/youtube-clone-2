export interface Commment{

    id:string,
    replies?:{comments:ReplyComment[]}
    snippet:{
        topLevelComment:{
            snippet:{
              authorDisplayName:string,
               authorProfileImageUrl:string,
               textOriginal:string,

            }
        }
        totalReplyCount:number,
    }
}

export interface ReplyComment{
    
            id:string,
            snippet:{
                authorDisplayName:string,
                authorProfileImageUrl:string,
                likeCount:number,
                textOriginal:string,
                publishedAt:string,
            }
    
}