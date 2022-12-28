import { useRouter } from 'next/router'
import Card from '../../components/card'
import ImageJumbotron from '../../components/image-jumbotron'

export default () => {
    const router = useRouter()
    const slug = router.query.slug as string

    return (
        <>
            <ImageJumbotron image='https://source.unsplash.com/random/1080x1080?cat' title={slug} />
            <main className='mx-4 md:mx-20 xl:mx-32 my-20'>
                <div className='mb-20'>
                    <h3 className='text-baseDark font-bold text-3xl mb-3'>{slug}</h3>
                    <h4 className='mb-12 text-sm'>By Admin, in Date</h4>
                    <div className='text-lg leading-9'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultricies libero ut mattis pulvinar. Vestibulum a turpis commodo nibh interdum pharetra at quis lacus. Aenean tempor congue fermentum. Maecenas auctor id leo non imperdiet. Proin eu dolor felis. Quisque tempus placerat odio, vitae ultricies tortor tristique in. Vivamus in diam at augue finibus commodo et ut elit. Pellentesque eu eros pellentesque, porttitor mauris et, scelerisque ipsum. Cras id nisi et erat interdum molestie. Donec ipsum mauris, dictum non faucibus ac, congue at nunc. Mauris at varius magna. Ut in euismod mauris.
                        <br />
                        Integer eget maximus orci, nec condimentum massa. Suspendisse ultrices maximus vehicula. Aliquam bibendum tellus dolor, vel tristique neque commodo in. Etiam vitae erat vehicula, ultricies metus ut, vulputate ante. Suspendisse id elit molestie, pulvinar orci sed, aliquam urna. Fusce luctus fermentum ornare. Nunc et est urna. Cras consectetur volutpat varius. Nunc efficitur vitae tortor nec porttitor. Nullam elementum a arcu sit amet pharetra. Nullam sed sem vitae diam pulvinar tincidunt sit amet ac libero. Quisque at venenatis velit, non convallis purus. Nulla facilisi.
                        <br />
                        Curabitur consectetur pharetra sodales. Quisque vitae scelerisque sem. Phasellus efficitur est nibh, vel aliquet urna lacinia malesuada. Ut iaculis arcu sed tellus feugiat maximus non et velit. Donec turpis arcu, porttitor id eleifend non, varius in tortor. Maecenas consequat porttitor diam, ut efficitur mi vehicula id. Aliquam dapibus nibh et aliquet egestas. Morbi mollis posuere laoreet.
                        <br />
                        Vestibulum pharetra metus lectus, in finibus eros volutpat non. Phasellus sagittis ex non convallis volutpat. Donec egestas lectus sem, et ullamcorper mauris lobortis id. In hac habitasse platea dictumst. Phasellus ut nibh quam. Proin ornare dolor purus, auctor facilisis turpis posuere id. Vestibulum arcu magna, laoreet id porta eget, luctus ac mi. Duis semper lobortis purus. In in laoreet massa. Aliquam aliquet convallis augue, a facilisis nulla venenatis in. Nullam aliquam leo vel libero aliquet elementum.
                        <br />
                        Nullam fringilla tempor est a finibus. Pellentesque malesuada sapien ac posuere rhoncus. Nullam eleifend augue in scelerisque consequat. Duis dapibus iaculis arcu, at fringilla eros cursus sed. Curabitur egestas, odio non ultrices volutpat, odio lacus vehicula leo, ut dapibus velit est et sem. Fusce a felis ullamcorper, elementum eros eu, viverra lacus. Nunc volutpat tristique risus, bibendum sagittis lorem pretium vehicula. Integer tristique nec quam id lacinia. Proin aliquet ornare risus, sit amet cursus ligula bibendum non. Donec iaculis, lorem ac imperdiet mollis, elit enim tristique orci, vitae viverra tellus odio et magna. Duis vel augue sed nibh facilisis bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                    </div>
                </div>
            </main>
        </>
    )
}
