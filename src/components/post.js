import React from 'react';
function Post()
{
    return ( <div>
          <section class="recentpost">
        <h1>Recent Posts</h1>
        <p>Rhoncus tempor nunc, praesent amet eu hac tortor malesuada tellus</p>
        <div class="recentpost-main">
          <div style={{alignSelf: 'center'}}>
            <button class="arrows">
              <i class="fas fa-chevron-left"></i
              ><i class="fas fa-chevron-left"></i>
            </button>
          </div>
          <div class="card">
            <div>
              <img src="/assests/images/pen.jpg" alt="" />
            </div>
            <div class="content-card">
              <div>
                <span class="ali">Aliquam auctor</span>
                <span class="head">HEALING</span>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  doloribus, accusantium, exercitationem velit hic et
                  consequatur aperiam qui cupiditate, similique alias rem quas
                  aliquam eligendi quam quibusdam unde minima vitae.
                </p>
              </div>
            </div>
            <div>
              <button
                class="button"
                style={{
                    borderRadius: '0',
                    width: '100%',
                    margin: '0',
                    borderBottomLeftRadius: '12px',
                    borderBottomRightRadius: '12px'}}
              >
                Read More
                <i class="fas fa-chevron-right" style={{float: 'right'}}></i
                ><i class="fas fa-chevron-right" style={{float: 'right'}}></i>
              </button>
            </div>
          </div>
          <div class="card">
            <div>
              <img src="/assests/images/stones-card.jfif" alt="" />
            </div>
            <div class="content-card">
              <div>
                <span class="ali">Aliquam auctor</span>
                <span class="lead">LEADING</span>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  doloribus, accusantium, exercitationem velit hic et
                  consequatur aperiam qui cupiditate, similique alias rem quas
                  aliquam eligendi quam quibusdam unde minima vitae.
                </p>
              </div>
            </div>
            <div>
              <button
                class="button"
                style={{
                    borderRadius: '0',
                    width: '100%',
                    margin: '0',
                    borderBottomLeftRadius: '12px',
                    borderBottomRightRadius: '12px'}}
              >
                Read More
                <i class="fas fa-chevron-right" style={{float: 'right'}}></i
                ><i class="fas fa-chevron-right" style={{float: 'right'}}></i>
              </button>
            </div>
          </div>
          <div class="card">
            <div>
              <img src="/assests/images/stones-card.jfif" alt="" />
            </div>
            <div class="content-card">
              <div>
                <span class="ali">Aliquam auctor</span>
                <span class="head">HEALING</span>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  doloribus, accusantium, exercitationem velit hic et
                  consequatur aperiam qui cupiditate, similique alias rem quas
                  aliquam eligendi quam quibusdam unde minima vitae.
                </p>
              </div>
            </div>
            <div>
              <button
                class="button"
                style={{
                  borderRadius: '0',
                  width: '100%',
                  margin: '0',
                  borderBottomLeftRadius: '12px',
                  borderBottomRightRadius: '12px'}}
              >
                Read More
                <i class="fas fa-chevron-right" style={{float: 'right'}}></i
                ><i class="fas fa-chevron-right" style={{float: 'right'}}></i>
              </button>
            </div>
          </div>
          <div style={{alignSelf: 'center'}}>
            <button class="arrows">
              <i class="fas fa-chevron-right"></i
              ><i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div>
          <img style={{marginTop: '80px'}} src="/assests/images/Group1.svg" alt="" />
        </div>
      </section>
</div>)
}

export default Post;