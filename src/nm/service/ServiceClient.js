const appUrl = "http://music.163.com/api";

export default class ServiceClient
{

    getUserPlayList(uid = "40652589")
    {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${appUrl}/user/playlist`,
                data: {
                    uid: uid,
                    limit: 1000,
                    offset: 0
                }
            }).then(res => {
                if (res.code === 200 )
                {
                    resolve(res.playlist);
                }
                else
                {
                    reject("the request is faied");
                }
            })
        });
    }
    getSpecificPlayList(uid = "4000000")
    {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${appUrl}/playlist/detail`,
                data: {
                    id:uid
                }
            }).then(res => {
                if (res.code === 200 )
                {
                    resolve(res.result);
                }
                else
                {
                    reject("the request is faied");
                }
            })
        });
    }
}
let __instance = null;

ServiceClient.getInstance = function()
{
    if (__instance === null)
    {
        __instance = new ServiceClient();
    }

    return __instance;
};
