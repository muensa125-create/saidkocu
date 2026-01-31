import { ExternalLink, Users, Brain, Youtube, BookOpen } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const projects = [
    {
      title: 'Gelişim Anahtarı Discord Topluluğu',
      description: '1400+ üyeli kişisel gelişim topluluğunun kurucusu.',
      link: 'https://discord.com/invite/gelisim-anahtari-gecmisolsun-1021011873753219122',
      icon: Users,
      note: 'Erişim için VPN gerekebilir',
    },
    {
      title: 'Ordina AI',
      description: 'Psikoloji ve gelişim odaklı yapay zeka uygulaması kurucusu.',
      link: 'https://play.google.com/store/apps/details?id=com.saidkocu.ayna&hl=tr',
      icon: Brain,
    },
    {
      title: 'YouTube Kanalı',
      description: 'Bilim ve deneyim paylaşımları.',
      link: 'https://www.youtube.com/@saidkocu',
      icon: Youtube,
    },
    {
      title: 'Medium Makaleleri',
      description: 'Profesyonel yazılar ve analizler.',
      link: 'https://medium.com/@saidkocu',
      icon: BookOpen,
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-24 lg:py-32">
        {/* Header Fotoğraf */}
        <div className="mb-12 sm:mb-16 md:mb-20 flex justify-center">
          <div className="w-full max-w-2xl">
            <Image
              src="/said-kocu-header.jpg"
              alt="Said Koçu"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
        {/* Hakkımda Bölümü */}
        <section className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <h1 className="mb-6 font-serif text-3xl font-normal leading-tight text-white sm:text-4xl sm:mb-7 md:text-5xl md:mb-8 lg:text-6xl">
            Said Koçu
          </h1>
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <p className="text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
              İzmir'de yaşayan, Mersin Üniversitesi PDR öğrencisi. Psikoloji kuramlarını teknoloji ve yapay zeka ile harmanlayan bir girişimci.
            </p>
          </div>
        </section>

        {/* Projeler Bölümü */}
        <section className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <h2 className="mb-10 font-serif text-2xl font-normal text-white sm:text-3xl sm:mb-12 md:text-4xl md:mb-16">
            Projeler
          </h2>
          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-b border-white/10 pb-6 transition-opacity hover:opacity-70 active:opacity-70 sm:pb-7 md:pb-8"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="mt-0.5 flex-shrink-0 sm:mt-1">
                      <Icon className="h-4 w-4 text-white/60 sm:h-5 sm:w-5" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="mb-1.5 flex items-baseline gap-2 sm:mb-2">
                        <h3 className="font-serif text-lg font-normal text-white sm:text-xl md:text-2xl break-words">
                          {project.title}
                        </h3>
                        <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] sm:h-4 sm:w-4" strokeWidth={1.5} />
                      </div>
                      <p className="mb-1.5 text-sm leading-relaxed text-white/70 sm:text-base sm:mb-2 md:text-lg">
                        {project.description}
                      </p>
                      {project.note && (
                        <p className="text-xs italic text-white/50 sm:text-sm">
                          {project.note}
                        </p>
                      )}
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </section>

        {/* Fotoğraf */}
        <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32 flex justify-center">
          <div className="w-full max-w-2xl">
            <Image
              src="/said-kocu-new.jpg"
              alt="Said Koçu"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Yazılar Bölümü */}
        <section>
          <h2 className="mb-10 font-serif text-2xl font-normal text-white sm:text-3xl sm:mb-12 md:text-4xl md:mb-16">
            Yazılar
          </h2>
          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            <a
              href="https://mediumturkiye.com/hayat%C4%B1n-anlam%C4%B1-%C3%B6l%C3%BCm-m%C3%BC-aea8a2306812"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-b border-white/10 pb-6 transition-opacity hover:opacity-70 active:opacity-70 sm:pb-7 md:pb-8"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-0.5 flex-shrink-0 sm:mt-1">
                  <BookOpen className="h-4 w-4 text-white/60 sm:h-5 sm:w-5" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mb-1.5 flex items-baseline gap-2 sm:mb-2">
                    <h3 className="font-serif text-lg font-normal text-white sm:text-xl md:text-2xl break-words">
                      Hayatın anlamı ölüm mü?
                    </h3>
                    <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] sm:h-4 sm:w-4" strokeWidth={1.5} />
                  </div>
                  <p className="mb-1.5 text-sm leading-relaxed text-white/70 sm:text-base sm:mb-2 md:text-lg italic">
                    "Benlik ölümü" (ego death) denen deneyim de benzer bir şeyi söylüyor: benliğin sınırlarının çözülmesi, insanın daha büyük bir bilinç akışına karışması. Belki ölüm, korkulacak bir yokluk değil; bir dönüşüm, bir bütünlük hâlidir.
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-xs text-white/50 mb-2 sm:text-sm">Sizden gelen güzel yorumlar arasından</p>
                    <div className="space-y-2">
                      <p className="text-xs leading-relaxed text-white/60 sm:text-sm italic">
                        "Ölüm hayatın doğal ritmi olsa da kabul etmek güç olabiliyor yaşamın anlamına bir ayna ve bana göre açılan bir kapı. Düşündüren derinliği olan bu güzel yazı için teşekkür ediyorum kaleminize sağlık"
                      </p>
                      <p className="text-xs text-white/40 sm:text-sm">— Aynur Biber</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://medium.com/turkiyem/ahlak%C4%B1n-%C3%B6l%C3%BCm%C3%BC-hik%C3%A2yelerle-uyutulan-bir-toplumun-%C3%A7%C3%B6k%C3%BC%C5%9F%C3%BC-534898d0a02e"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-b border-white/10 pb-6 transition-opacity hover:opacity-70 active:opacity-70 sm:pb-7 md:pb-8"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-0.5 flex-shrink-0 sm:mt-1">
                  <BookOpen className="h-4 w-4 text-white/60 sm:h-5 sm:w-5" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mb-1.5 flex items-baseline gap-2 sm:mb-2">
                    <h3 className="font-serif text-lg font-normal text-white sm:text-xl md:text-2xl break-words">
                      Ahlakın Ölümü: Hikâyelerle Uyutulan Bir Toplumun Çöküşü
                    </h3>
                    <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] sm:h-4 sm:w-4" strokeWidth={1.5} />
                  </div>
                  <p className="mb-1.5 text-sm leading-relaxed text-white/70 sm:text-base sm:mb-2 md:text-lg italic">
                    Fakat ahlakın kaynağı, ritüellerde değil; vicdanda ve insan ruhundadır.
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-xs text-white/50 mb-2 sm:text-sm">Sizden gelen güzel yorumlar arasından</p>
                    <div className="space-y-2">
                      <p className="text-xs leading-relaxed text-white/60 sm:text-sm italic">
                        "Paylaşmış bulunduğun yazında adeta ülkemizin başlıca sorunu olan etik kurallarını oldukça güzel dile getirmişsin kardeşim kalemine sağlık. Belki, 'AHLAK' ve 'ERDEM' olgularına gereken ihtiyatı gösterdiğimizde ülkemiz tekrar güzelleşir. Yazıyla kal ve fikirlerinle bizi aydınlatmayı ihmal etme…"
                      </p>
                      <p className="text-xs text-white/40 sm:text-sm">— Furkan Keçeli</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://medium.com/turkiyem/%EF%B8%8F-ba%C5%9Fl%C4%B1k-odan%C4%B1n-i%C5%9F%C4%B1%C4%9F%C4%B1n%C4%B1-kimseye-teslim-etme-058a17bd7a20"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-b border-white/10 pb-6 transition-opacity hover:opacity-70 active:opacity-70 sm:pb-7 md:pb-8"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="mt-0.5 flex-shrink-0 sm:mt-1">
                  <BookOpen className="h-4 w-4 text-white/60 sm:h-5 sm:w-5" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mb-1.5 flex items-baseline gap-2 sm:mb-2">
                    <h3 className="font-serif text-lg font-normal text-white sm:text-xl md:text-2xl break-words">
                      Odanın Işığını Kimseye Teslim Etme
                    </h3>
                    <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-[-0.5px] sm:h-4 sm:w-4" strokeWidth={1.5} />
                  </div>
                  <p className="mb-1.5 text-sm leading-relaxed text-white/70 sm:text-base sm:mb-2 md:text-lg italic">
                    Sonuçta, hayat başkalarının ışıklarıyla aydınlanacak bir yol değildir. İnsanlar renklerinizi değiştirmeye çalışabilir, ışığınızı kısabilir, hatta kıvılcımlarınızı söndürebilir. Ama odanızın ışığı zaten sizin elinizde.
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-xs text-white/50 mb-2 sm:text-sm">Sizden gelen güzel yorumlar arasından</p>
                    <div className="space-y-2">
                      <p className="text-xs leading-relaxed text-white/60 sm:text-sm italic">
                        "Sonuçta, hayat başkalarının ışıklarıyla aydınlanacak bir yol değildir. İnsanlar renklerinizi değiştirmeye çalışabilir, ışığınızı kısabilir, hatta kıvılcımlarınızı söndürebilir. Ama odanızın ışığı zaten sizin elinizde. Duvarima asacagin o derece🤌🏻🙏🏻🥹"
                      </p>
                      <p className="text-xs text-white/40 sm:text-sm">— İnci Çilsal</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
