
import React, { useState, useEffect } from 'react';
import type { Store } from '../types';
import { stores as fallbackStores } from '../data/stores';
import StoreCard from './StoreCard';

// 新しいJSONデータをホストするGitHub GistのURL
const WHISKEY_DATA_URL = 'https://raw.githubusercontent.com/9477781/my-gestwhisky-app-data/main/data/guest_whisky.json';

// 新しいJSONのデータ構造に対応する型定義
interface RawStoreData {
  '店コード': number;
  '個店URL': string;
  '店名': string;
  'ゲストウィスキー1'?: string;
  'ゲストウィスキー2'?: string;
  'ゲストウィスキー3'?: string;
  'ゲストウィスキー4'?: string;
  'ゲストウィスキー5'?: string;
}

// レイアウトと再利用性を向上させるためのセクション用スタイル付きコンテナ
const SectionBox: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section className="bg-white rounded-lg shadow-lg border border-gray-200/60 p-6 md:p-8">
        <h3 className="font-baskerville text-3xl md:text-4xl font-bold text-[#000033] pl-4 border-l-4 border-[#bfa045] mb-6">
            {title}
        </h3>
        <div className="text-gray-800 leading-relaxed space-y-4 text-xl">
            {children}
        </div>
    </section>
);

const WhiskeyRallyPage: React.FC = () => {
    const [stores, setStores] = useState<Store[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdated, setLastUpdated] = useState<string | null>(null);

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await fetch(WHISKEY_DATA_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const rawData: RawStoreData[] = await response.json();
                
                const transformedStores = rawData.map(rawStore => {
                    const whiskeys = [
                        rawStore['ゲストウィスキー1'],
                        rawStore['ゲストウィスキー2'],
                        rawStore['ゲストウィスキー3'],
                        rawStore['ゲストウィスキー4'],
                        rawStore['ゲストウィスキー5'],
                    ].filter((whiskey): whiskey is string => !!whiskey);

                    return {
                        name: rawStore['店名'],
                        url: rawStore['個店URL'],
                        whiskeys: whiskeys,
                    };
                });

                setStores(transformedStores);
                setLastUpdated(new Date().toLocaleDateString('ja-JP'));
            } catch (e) {
                console.error("Failed to fetch remote data, using fallback.", e);
                setStores(fallbackStores);
                setLastUpdated('2025/08/15');
            } finally {
                setIsLoading(false);
            }
        };

        fetchStores();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="space-y-8">
                <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg border border-gray-200/60">
                    <h2 className="font-baskerville text-4xl md:text-6xl font-bold text-center text-gray-800 mb-6 pb-4 border-b-2 border-gray-200">
                        82 ALE HOUSE 20周年記念
                        <br />
                        ウィスキーラリー開催！
                    </h2>
                    
                    <section className="text-center">
                        <p className="mb-2">
                            <strong className="block">
                                <span className="bg-[#000033] text-white text-2xl font-baskerville italic px-3 py-1 shadow-md">
                                    82 ALE HOUSE　おかげさまで20周年！
                                </span>
                            </strong>
                        </p>
                        <p className="text-3xl font-bold text-gray-800 mt-2">ウィスキーラリー開催</p>
                        <img src="https://www.pub-hub.com/uploads/other/285/image/251688030814.png" width="263" alt="Whiskey Rally" height="271" className="mx-auto my-6 transform transition-transform hover:scale-105" />
                        <p className="max-w-4xl mx-auto text-gray-700 text-xl">
                            それぞれの店舗が推しウイスキーを【ゲストウィスキー】としてラインナップ！<br />各店のゲストウィスキーを愉しみながらスタンプを集めて景品をゲットしよう！
                        </p>
                    </section>
                </div>
                
                <SectionBox title="期間">
                    <p className="text-4xl font-semibold text-left text-[#000033]">2025年9月1日(月)〜12月31日(水)</p>
                </SectionBox>
                
                <SectionBox title="参加方法">
                    <ul className="list-disc list-inside space-y-2">
                        <li>1杯＝1スタンプ <span className="text-lg text-gray-600">(※ハーフショット、シングル、ダブルともに1杯で1スタンプ)</span></li>
                        <li>スタンプを10個集めて景品をGET</li>
                        <li><span className="font-bold">白枠：8個</span> &rarr; すべてのゲストウィスキーが対象</li>
                        <li><span className="font-bold">スペシャル枠：2枠</span> &rarr; 各店おすすめの特別な1本が対象</li>
                    </ul>
                    <p className="my-6 text-center text-2xl font-bold text-[#000033]">\\ スタンプカードは店舗にてお配りしています //</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-4">
                        <img src="https://www.pub-hub.com/uploads/other/418/image/251756721250.jpg" alt="Stamp Card Front" width="350" height="213" className="shadow-lg rounded transform transition-transform hover:scale-105" />
                        <img src="https://www.pub-hub.com/uploads/other/418/image/251756721255.jpg" alt="Stamp Card Back" width="350" height="213" className="shadow-lg rounded transform transition-transform hover:scale-105" />
                    </div>
                    <p className="text-center">期間中は何度でもご参加いただけます♪</p>
                </SectionBox>

                <SectionBox title="各店の特別なゲストウィスキー">
                    {isLoading && <p className="text-center text-xl">店舗リストを読み込んでいます...</p>}
                    
                    {(!isLoading && (error || lastUpdated)) && (
                      <div className="mb-4">
                          {error && <p className="text-center text-red-600">{error}</p>}
                          {lastUpdated && <p className="text-right text-lg text-gray-600">{`データ更新日: ${lastUpdated}`}</p>}
                      </div>
                    )}

                    <div className="text-center my-6">
                        <p className="text-xl font-bold">現在販売のゲストウィスキーラインナップ</p>
                        <p className="text-red-600 mt-1">※売り切れの際はご了承下さい</p>
                    </div>

                    <p className="text-lg text-gray-600 mb-4 text-left">「店名」をクリックすると、公式サイトの店舗詳細ページに移動します。</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {stores.map((store) => (
                            <StoreCard key={store.name} store={store} />
                        ))}
                    </div>
                </SectionBox>
                
                <SectionBox title="景品について">
                   <p className="font-bold text-4xl text-left text-[#000033] mb-2">特製卓上カレンダー2026(非売品）</p>
                   <p>82 15店舗のイラストをカレンダーにしました！</p>
                   <img src="https://www.pub-hub.com/uploads/other/418/image/251756721110.png" alt="Calendar Prize" width="254" height="309" className="my-4 mx-auto shadow-lg rounded transform transition-transform hover:scale-105" />
                   <div className="text-lg space-y-1 text-gray-600">
                    <p>※画像はイメージです。現物とは異なる場合がございます</p>
                    <p className="text-red-600">※引換は10月13日以降とさせていただきます</p>
                    <p>※引換は82全店（HUB＋82 池袋WACCA店を除く）で対応いたします</p>
                   </div>
                </SectionBox>
                
                <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg border border-gray-200/60">
                    <div className="text-center text-xl">
                        <p>これを機に飲んだことのないウィスキー、行ったことのない店舗に挑戦してみてください！</p>
                        <p className="mt-2">みなさまのご来店を心よりお待ちしております</p>
                    </div>

                    <div className="text-center mt-12">
                        <a href="https://www.pub-hub.com/index.php" className="inline-block px-8 py-3 bg-[#000033] text-white font-bold rounded hover:bg-[#1a2b4e] transition-colors text-xl">
                            ホームページトップに戻る
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhiskeyRallyPage;