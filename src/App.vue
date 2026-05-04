<script setup>
var sentences = [
  '“后来，那一方小小的坟茔，周围种满了金灿灿的莜麦。”',
  '“忘却的出生之地，无论再返回多少次，都终究不是家。”',
  '“籍贯那栏，他原本想填北方的家，却终究改成了脚下的土地，烟雨养人，也抹去了坝上的风沙。”',
  '“那天下午，父亲送他回家，他硬是要停下来，看一看黄岛浴场的日落。”',
  '“故都的人们走上游街，高喊‘打倒xxx’，然而异国的孩子遮面跑开了。”',
  '“海的那头，居然也是九点就街上空空。天色微凉，他回想起在这座以和牛闻名的城市听到的第一句中文。”',
  '“同事们都说他很厉害，四五岁的人，随随便便就是1000层台阶，但到了半山宾馆，入睡时间可不会骗人。”',
  '“他脱了鞋，光着脚在金石滩上奔跑。‘嗷！’一块尖锐的小石子告诉他，还是穿着鞋好。”',
  '“新年的钟声还未敲响，地上的火树银花就已迫不及待地遍地绽开。他们的航班在空中盘旋了好半天才降落。”',
  '“来到楼顶，风声激荡，从世界第二高楼的高度俯视，人和万物，都如此渺小。”',
  '“父母和他挥手告别，他头也不回，过了拐角的校医院，却愕然了：客居西南的新生活，就这么开始了。”',
  '“冰冷的钢梁，红色的喷漆，大桥横贯大江，离地百米有余。看着下方的楼房，三十多度的天，却依然感到凌冽。”',
  '“从此表哥有了相依之人；从此身上的压力多了三分。汽车一路南下，自由还未生发，他就看到了它的死亡。”',
  '“‘起码这里是省内，一周能回一次，近多了。’他茫然地看着父亲百尺见方的新出租屋，安慰自己道。”',
  '“‘胡同六步宽，小街十二步宽，大街二十四步宽。’自己的步子太大了么？怎么每个胡同都只有四五步？”',
]
var sentence = sentences[Math.floor(Math.random() * sentences.length)]
</script>

<template>
  <img id="wallpaper" src="/img/wallpaper.png" />
  <div id="header-panel">
    <div id="avatar">
      <img src="/img/avatar.png" />
    </div>
    <p class="name first this-site-text">起重鹤</p>
    <p class="alias second this-site-text">QZCrane</p>
    <p class="moto text this-site-text">论 Crane 的一词多义 ;-)</p>
  </div>
  <div id="link-panel">
    <p class="section-title third this-site-text">↓ 其他链接 ↓</p>
    <div class="link-panel-sections" id="social">
      <button class="social-button bilibili">
        <a href="https://space.bilibili.com/3546929734617957" target="_blank">
          <img class="inner-icon" src="/icon/bilibili.svg" />
        </a>
      </button>
      <button class="social-button rednote">
        <a href="https://www.xiaohongshu.com/user/profile/66a3a413000000001d020705" target="_blank">
          <img class="inner-icon" src="/icon/rednote.svg" />
        </a>
      </button>
      <button class="social-button tiktok">
        <a
          href="https://www.douyin.com/user/MS4wLjABAAAAg5FHrcGVIljHeNrGK5iqFFktG5tpEWJbratAPrUo8jU_ysyPNnqEpZnxDInuTpJD"
          target="_blank"
        >
          <img class="inner-icon" src="/icon/tiktok.svg" />
        </a>
      </button>
      <button class="social-button kuaishou">
        <a href="https://www.kuaishou.com/profile/3x8ahu54az7n7sm" target="_blank">
          <img class="inner-icon" src="/icon/kuaishou.svg" />
        </a>
      </button>
      <button class="social-button discord">
        <a href="https://discord.com/users/1120181808617750589" target="_blank">
          <img class="inner-icon" src="/icon/discord.svg" />
        </a>
      </button>
      <button class="social-button github">
        <a href="https://github.com/QZCrane7021" target="_blank">
          <img class="inner-icon" src="/icon/github.svg" />
        </a>
      </button>
    </div>
    <div style="margin: 0; height: 5vh"></div>
    <p class="section-title third this-site-text">↓ 博客分支 ↓</p>
    <div class="link-panel-sections" id="blogs">
      <!--a class="blog-link this-site-text"> [WIP]痴人文摘 </a-->
      <!--a class="blog-link this-site-text"> [WIP]雕虫小技 </a-->

      <a
        class="blog-link this-site-text text"
        href="https://qzcrane7021.github.io/TranslationToolsWiki/"
        target="_blank"
      >
        翻译工具百科
      </a>
    </div>
  </div>
  <div id="sentence-panel">
    <p class="this-site-text text">{{ sentence }}</p>
  </div>
</template>

<style scoped>
#wallpaper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
}

.blog-link {
  color: white;
  font-size: calc(min(2vw, 2vh));
  font-weight: bold;
  margin-left: 0.5em;
  margin-right: 0.5em;
}

.social-button {
  height: 5vh;
  width: 5vh;
  border: 0;
  border-radius: 2.5vh;
  margin-left: 0.25vw;
  margin-right: 0.25vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  position: relative;
}

.social-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  mask-image: radial-gradient(circle, transparent 0%, black 100%);
  -webkit-mask-image: radial-gradient(circle, transparent 0%, black 100%);
  z-index: -1;
}

.social-button > a {
  height: 80%;
  width: 80%;
}

.inner-icon {
  width: 100%;
  height: 100%;
}

#background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#header-panel {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 50vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#link-panel {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100vw;
  height: 50vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
}

#sentence-panel {
  position: absolute;
  left: 0;
  top: 90%;
  width: 100vw;
  height: 10vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
}

.link-panel-sections {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0.5vh;
}

#avatar {
  height: calc(min(30vw, 30vh));
  width: calc(min(30vw, 30vh));
}

#avatar > img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}

.this-site-text {
  font-weight: bold;
  color: white;
  text-shadow: 0 0 0.2em rgb(0 0 0);
}

.first {
  font-size: 5vh;
}

.name {
  margin-top: 0.1em;
  margin-bottom: 0;
}

.second {
  font-size: 4vh;
}

.alias {
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  top: -0.25em;
}

.third {
  font-size: 3vh;
}

.section-title {
  position: relative;
  margin-top: 0;
  margin-bottom: 0.1em;
}

.text {
  font-size: 2vh;
}

.moto {
  position: relative;

  margin-top: 0;
  margin-bottom: 0;
  top: -0.5em;
}

.bilibili {
  background-color: rgba(251, 114, 153, 0.5);
}

.github {
  background-color: rgba(0, 0, 0, 0.5);
}

.rednote {
  background-color: rgba(255, 37, 63, 0.5);
}

.tiktok {
  background-color: rgba(0, 0, 0, 0.5);
}

.kuaishou {
  background-color: rgba(255, 73, 6, 0.5);
}

.discord {
  background-color: rgba(89, 102, 242, 0.5);
}
</style>
