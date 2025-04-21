"use client"

import { Image } from "@nextui-org/react";

import Container from "@/shared-components/Container";
import ReadMoreBtn from "@/shared-components/ReadMoreBtn";

const Member = () => {
    return (
        <section className=" bg-[#F5F5F5]" id="member">
            <Container className="w-full xl:pl-0 ">
                <div className="flex items-center justify-between xl:flex-row flex-col gap-16 py-24 ">
                    <div className="flex items-start justify-start flex-1">
                        <Image radius="none" width={200} height={450} src="/images/members1.png" alt="members" />
                        <Image radius="none" width={200} height={450} src="/images/members2.png" alt="members" />
                        <Image radius="none" width={200} height={450} src="/images/members3.png" alt="members" />
                    </div>
                    <div className="flex-1">
                        <h2 className="font-medium text-4xl">MEMBER</h2>
                        <p className="font-normal text-base pt-6">BonZuttnerは、多様な背景を持つメンバーと共に、より良い社会を目指していくために日々精進しております。日本人やシリアにルーツを持つ仲間たちが揃っており、私たちのメンバー一人ひとりが、経験、文化、価値観を共有しながら新しいアイデアを形にしてみなさまにお届けをします。</p>
                        <ReadMoreBtn href="/members" />
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Member;
